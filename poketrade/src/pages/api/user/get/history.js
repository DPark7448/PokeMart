import { useRouter } from "next/router";
import mongoose from "mongoose";
import User from "../../../../data/User";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end("Not supported");
  }
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).end("Unauthorized");
  }
  const user = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET).username;

  const db = process.env.DB_URI;

  await mongoose
    .connect(db)
    .then(async () => {
      console.log("MongoDB connected");
      await User.findOne({ username: user }, { searchHistory: 1 })
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
