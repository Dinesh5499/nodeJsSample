const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile("math.html", {root:  __dirname})
})

app.listen(port, () => {
  console.log("hello")
})

app.use(express.static('public'));
