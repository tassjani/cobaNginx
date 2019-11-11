const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))