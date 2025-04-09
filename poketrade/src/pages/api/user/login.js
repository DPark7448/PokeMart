import mongoose from "mongoose";
import User from "../../../data/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Not supported");
  }
  try {
    req.body = JSON.parse(req.body);
  } catch {}

  const { username, password } = req.body;
  const db = process.env.DB_URI;

  //console.log(req.body);
  await mongoose.connect(db);
  mongoose
    .connect(db)
    .then(async () => {
      console.log("MongoDB connected");
      await User.findOne({ username: username })
        .then(async (u) => {
          if (!u) {
            mongoose.connection.close();
            return res
              .status(404)
              .end(
                "Could not find user with provided credenials; user doesn't exist"
              );
          }
          console.log(u);
          await bcrypt
            .compare(password, u.password)
            .then((match) => {
              mongoose.connection.close();
              if (!match) {
                return res
                  .status(404)
                  .end(
                    "Could not find user with provided credenials; passwords don't match"
                  );
              }
              const token = jwt.sign(
                { _id: u._id, username: u.username },
                process.env.NEXT_PUBLIC_SECRET
              );
              return res.status(200).json({ token: token });
            })
            .catch((err) => {
              mongoose.connection.close();
              console.error(err);
              return res.status(500).end("An error occurred");
            });
        })
        .catch((err) => {
          mongoose.connection.close();
          console.error(err);
          return res.status(500).end("An error occurred");
        });
    })
    .catch((err) => {
      mongoose.connection.close();
      console.log(err);
    });
}
