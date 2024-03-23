import express from 'express'

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




export default router