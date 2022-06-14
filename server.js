const express = require('express')
require('dotenv').config()
require('./config/database')
const cors = require('cors')
const router = require('./routes/index')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4000

app.listen(port, host, ( ) => (console.log(`App listeng en port ${ port }` )))