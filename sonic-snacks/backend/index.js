require ('dotenv').config()
const express = require('express');
//import cors from 'cors';
//import bodyParser from 'body-parser';
const router = require('./routes/router');
const app = express();

app.get('/', (req, res) => {
    res.send('home')
});

app.use('/places', require('./controllers/snacks'))

app.get('/', (req, res) => {
    res.send('hello Snacks!')
})

app.get('*', (req, res) => {
    console.log('user requested unknown route: ', req.url);
    res.status(404).send('<h1>404 page</h1>')

})
//app.use(cors());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use('/', router);

app.listen(process.env.PORT)
/*
const port = 3002;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/
