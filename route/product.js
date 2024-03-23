import express from 'express'
import {products} from '../constant/product.js'

const router = express.Router();

router.get("/" , (req , res) => {
    res.status(200).send({products : products})
})

export default router