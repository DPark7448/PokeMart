import { useRouter } from "next/router";
import mongoose from "mongoose";
import User from "../../../../data/User";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end("Not supported");
  }
  try {
    req.body = JSON.parse(req.body);
  } catch {}
  const { user } = req.query;
  const db = process.env.DB_URI;
  await mongoose.connect(db);
  mongoose
    .connect(db)
    .then(async () => {
      console.log("MongoDB connected");
      await User.findOne(
        { username: user },
        { password: 0, favorites: 0, searchHistory: 0 }
      )
        .then((u) => {
          if (!u) {
            return res.status(404).end("User not found");
          }
          return res.status(200).json(u);
        })
        .catch((err) => {
          console.error(err);
          mongoose.connection.close();
          return res.status(500).end("An error occurred");
        });
    })
    .catch((err) => {
      console.log(err);
    });
}
