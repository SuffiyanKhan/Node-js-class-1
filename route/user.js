import express from 'express';
import User from '../models/User.js';

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

router.post("/" , async (req , res) => {
    try {
        const user = new User(req.body)
        const newUser = await user.save()
        return res.status(200).send({ststus :  200 , message : "success" , user : newUser})
    } catch (err ) {
        return res.status(400).send({status : 400 , message : err.message})
    }
   
})



export default router