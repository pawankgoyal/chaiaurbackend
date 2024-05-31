require("dotenv").config()

const express = require("express")
const app = express()
const port = 4000

app.get("/", (req, res) => {
    res.send("okk")
})

app.listen(process.env.PORT, () => {
    console.log(`running on port ${port}`)
})