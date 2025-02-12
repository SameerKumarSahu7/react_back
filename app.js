const express = require('express')
const app = express()
const port =000

app.get('/', (req, res) => {
  res.send('Hello kya hal hai')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})