/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import mongoose from "mongoose";
import User from "../../../data/User"


export default function handler(req, res) {
    if (req.method != "GET") {
        return res.status(405).end("Not supported");
    }
    const { router } = useRouter();
    const { user} = req.query;

    User.findOne({ user })
        .then((u) => {
            if (!u) {
                return res.status(404).end("User not found");
            }
        return res.status(200).json(u)
        })
        .catch((err) => {
            console.error(err);
                    res.status(500).end("An error occurred");
        });
}
