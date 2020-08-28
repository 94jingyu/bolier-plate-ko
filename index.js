const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
const MONGODB_URL = 'mongodb+srv://jingyu:1234@boilerplate.es7fi.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {  res.send('Hello World!') })

app.listen(port, () => {  console.log(`Example app listening at http://localhost:${port}`) })

// npm run start