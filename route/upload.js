import express from 'express'
import multer from 'multer'

const upload = multer({ dest: 'images/' })

const router = express.Router();

router.post("/" , upload.single('file'), (req , res) => {
    res.send({message : "uploaded"})
})

export default router