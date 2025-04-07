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
  const { search } = req.query;
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
          const searchObj = u.searchHistory.find((c) => c.search === search);
          switch (req.method) {
            case "PUT":
              if (!searchObj) u.searchHistory.push({ search: search });
              break;
            case "DELETE":
              if (searchObj)
                u.searchHistory.splice(
                  u.searchHistory.indexOf({ search: search }),
                  1
                );
              break;
          }
          User.updateOne(
            { username: username },
            { $set: { searchHistory: u.searchHistory } }
          )
            .then(() => {
              mongoose.connection.close();
              return res
                .status(200)
                .end(
                  `${req.method === "PUT" ? "Added" : "Deleted"} search ` +
                    card +
                    ` ${req.method === "PUT" ? "to" : "from"} ` +
                    username +
                    `'s Search Histoyr`
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
