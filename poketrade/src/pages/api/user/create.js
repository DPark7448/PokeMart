/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import mongoose from "mongoose";
import User from "../../../data/User"


export default function handler(req, res) {
    if (req.method != "POST") {
        return res.status(405).end("Not supported");
    }
    const { router } = useRouter();
    const { user, pass } = req.body;

    const newUser = new User({ user, pass });
    newUser.save().then(() => { 

        router.push("/")
    }).catch((err) = {
        
    })
}
