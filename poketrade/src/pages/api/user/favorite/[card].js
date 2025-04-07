import mongoose from "mongoose";
import User from "../../../../data/User";

export default async function handler(req, res) {
  if (!(req.method === "PUT" || req.method === "DELETE")) {
    return res.status(405).end("Not supported");
  }
  try {
    req.body = JSON.parse(req.body);
  } catch {}
  const { username } = req.body;
  const { card } = req.query;
  const db = process.env.DB_URI;

  await mongoose
    .connect(db)
    .then(async () => {
      console.log("MongoDB connected");
      User.findOne({ username: username })
        .then((u) => {
          if (!u) {
            mongoose.connection.close();
            return res.status(404).end("User doesn't exist");
          }
          const cardObj = u.favorites.find((c) => c.cardId === card);
          switch (req.method) {
            case "PUT":
              if (!cardObj) u.favorites.push({ cardId: card });
              else
                return res
                  .status(400)
                  .end("This card already exists in this user's Favorites");
              break;
            case "DELETE":
              if (cardObj)
                u.favorites.splice(u.favorites.indexOf({ cardId: card }), 1);
              else
                return res
                  .status(400)
                  .end("This card doesn't exist in this user's Favorites");
              break;
          }
          User.updateOne(
            { username: username },
            { $set: { favorites: u.favorites } }
          )
            .then(() => {
              mongoose.connection.close();
              return res
                .status(200)
                .end(
                  `${req.method === "PUT" ? "Added" : "Deleted"} card ` +
                    card +
                    ` ${req.method === "PUT" ? "to" : "from"} ` +
                    username +
                    `'s favorites`
                );
            })
            .catch((err) => {
              mongoose.connection.close();
              console.error(err);
              return res.status(500).end("An error has occurred");
            });
        })
        .catch((err) => {
          mongoose.connection.close();
          console.error(err);
          return res.status(500).end("An error has occurred");
        });
    })
    .catch((err) => {
      console.log(err);
      mongoose.connection.close();
      return res.status(500).end("An error has occurred");
    });
}
