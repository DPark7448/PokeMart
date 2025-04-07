import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: [{ cardId: { type: String } }],
  searchHistory: [{ search: { type: String } }],
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);

    user.password = hash;
    next();
  });
});

const User = mongoose.models.users || mongoose.model("users", UserSchema);

export default User;
// try {
//         User = mongoose.model("users",UserSchema)
// }
// catch {  User = mongoose.model("users")}
