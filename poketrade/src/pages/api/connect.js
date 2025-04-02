import mongoose from "mongoose";


export default async function handler(req, res)
{
// DB Config
    const db = process.env.DB_URI;

// Connect to MongoDB
    await mongoose
        .connect(db)
        .then(() => {
            console.log('MongoDB connected');
            return res.status(200).end()
        })
        .catch(err => {
            console.log(err)
             return res.status(500).end(err)
        });
    
}

