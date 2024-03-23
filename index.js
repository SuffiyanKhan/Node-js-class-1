import express from 'express'
import router from './route/index.js';

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use("/", router)

app.listen(PORT , () => {
    console.log(`server is runing ... ${PORT}`)
})

app.get("/" , (req , res) => {
    res.send("hello Pakistan")
})