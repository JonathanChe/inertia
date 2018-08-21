const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

// connect to database
mongoose.connect(process.env.MONGO_URL);

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/', 
(req, res) => {
    res.send('Hello World')
});

// doesn't work below for postman. 
// need to test further
app.post('/',
  (req, res) => {
    const test = req.body.sick;
    console.log('inside', test)
    res.status(200).send(test);
  }
)

app.listen(port, () => console.log(`Server listening on port ${port}`));

// do i need below?
// // create server routes here
// const router = require('./router');
// // all routes defined here. 
// router(app);
// const port = 5000;
// app.listen(port, () => console.log(`Server listening on port ${port}`));
