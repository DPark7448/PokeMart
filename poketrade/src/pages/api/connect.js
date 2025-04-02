import mongoose from "mongoose";
require('dotenv').config()

export default function handler(req, res)
{
// DB Config
    const db = process.env.DB_URI;

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
}

