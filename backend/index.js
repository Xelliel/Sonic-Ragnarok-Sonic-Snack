const express = requires('express')
const cors = require('cors')
const bodyParser = require ('body-parser')
const router = require(./routes/router)

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions ={
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/', router)


const port = 8080
const server = app.listen(port, ()  =>{
    console.log('please be running ${port}')
})