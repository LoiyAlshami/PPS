const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000

const db = require('./Model/db')
const productsRouter = require('./routes/products-router')
const UserRouter = require('./routes/User-router')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api',productsRouter)
app.use('/api',UserRouter)
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
