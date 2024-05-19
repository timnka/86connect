const express = require('express')
const app = express()
const PORT = 3000

app.use((req, res, next) => {
    console.log(`Received a ${req.method} request to ${req.url}`)
    next()
})

app.get('/', (req,res)=>{
    res.send('This is the response from the homepage!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})