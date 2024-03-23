import express from 'express';
import User from '../models/User';

const router = express.Router();

const arr =[
    {
        id :  123,
        name : "abc"
    }
]


router.get("/" , (req , res) => {
    res.status(200).send(arr)
})

router.post("/" , (req , res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save()
    res.status(200).send({message : "done"})
})



export default router