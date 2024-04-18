// const express = require('express')
// const app = express()




// app.get("/api", (req, res) => {
//     res.json({"users": ["userOne", "userTwo", "UserThree"]})
// })

// app.listen(5000, () => {console.log("Server started on port 5000")})


const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')


app.use(cors())
app.use(express,static(''));
app.use(express.static(path.join(__dirname, 'build')));
const produceRouter = require('./controller/produce_controller');


// When you make a GET request to the address ending with "/" ... Serve the built app from "/build/index.html"
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/produce', produceRouter);


app.get('/', (req, res) => {
  res.sendFile('/views/homepage.jsx');
})


app.listen(3002);