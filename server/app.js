import express from "express";
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const port = process.env.PORT || 5000

app.use(express.json({ limit: '50mb' }))

app.get('/', (req, res) => {
    res.send("Server")
})

app.listen(port, () => {
    console.log(`Server started`)
})