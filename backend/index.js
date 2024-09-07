const connecttomongoose = require("./db")
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.use(express.json())

//avilable routes
app.use("/message", require("./routes/msg"))

app.listen(5000)

connecttomongoose()