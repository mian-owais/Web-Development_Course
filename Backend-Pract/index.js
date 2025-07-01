require('dotenv').config()
//console.log(process.env) 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
   res.send('its-Hashmii-10')
})

app.get('/login', (req, res) => {
   res.send('Login Page with Hashmii')
})

app.get('/youtube', (req, res) =>{
    res.send("<h1> Hashmii without Chai is Impossibl</h1>")
})

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})