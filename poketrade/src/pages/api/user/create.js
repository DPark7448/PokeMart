import { useRouter } from "next/router";
import mongoose from "mongoose";
import { User } from "@/data/User";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Not supported");
  }
  //const { router } = useRouter();
  const { username, password } = req.body;
  const db = process.env.DB_URI;

  await mongoose
    .connect(db)
    .then(async () => {
      console.log("MongoDB connected");
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
      return res.status(500).end(err);
    });
}
