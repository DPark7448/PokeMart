import mongoose from "mongoose";
import User from "../../../../data/User";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (!(req.method === "PUT" || req.method === "DELETE")) {
    return res.status(405).end("Not supported");
  }
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).end("Unauthorized");
  }
  const { username } = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET);
  const { search } = req.query;
  const db = process.env.DB_URI;
  await mongoose.connect(db);
  mongoose
    .connect(db)
    .then(async () => {
      console.log("MongoDB connected");
      User.findOne({ username: username })
        .then((u) => {
          if (!u) {
            //mongoose.connection.close();
            return res.status(404).end("User doesn't exist");
          }
          const searchObj = u.searchHistory.find((c) => c.search === search);
          switch (req.method) {
            case "PUT":
              if (!searchObj) {
                u.searchHistory.push({ search: search, time: new Date() });
                if (u.searchHistory.length > 5) {
                  u.searchHistory.splice(0, 1);
                }
              }
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
              //mongoose.connection.close();
              return res
                .status(200)
                .end(
                  `${req.method === "PUT" ? "Added" : "Deleted"} search ` +
                    search +
                    ` ${req.method === "PUT" ? "to" : "from"} ` +
                    username +
                    `'s Search Histoyr`
                );
            })
            .catch((err) => {
              //mongoose.connection.close();
              console.error(err);
              return res.status(500).end("An error has occurred");
            });
        })
        .catch((err) => {
          //mongoose.connection.close();
          console.error(err);
          return res.status(500).end("An error has occurred");
        });
    })
    .catch((err) => {
      console.log(err);
      //mongoose.connection.close();
      return res.status(500).end("An error has occurred");
    });
}
