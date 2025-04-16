import { useRouter } from "next/router";
import mongoose from "mongoose";
import User from "../../../data/User";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Not supported");
  }
  try {
    req.body = JSON.parse(req.body);
  } catch {}
  //const { router } = useRouter();
  const { username, password, password2 } = req.body;
  const db = process.env.MONGODB_URI;
  if (!username) return res.status(400).end("Username not provided");
  if (password != password2)
    return res.status(400).end("Passwords do not match");
  await mongoose.connect(db);
  mongoose
    .connect(db)
    .then(async () => {
      console.log("MongoDB connected");
      console.log("Name: " + username);
      const newUser = new User({ username, password });
      await newUser
        .save()
        .then(() => {
          mongoose.connection.close();
          return res.status(200).end("Created user: " + username);
        })
        .catch((err) => {
          mongoose.connection.close();
          if (err.code == 11000) {
            return res.status(400).end("This user already exists");
          }
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
