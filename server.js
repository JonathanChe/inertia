const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config()

// connect to database
mongoose.connect(process.env.MONGO_URL);
const app = express();
const port = 3000;
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '/client/public')));
app.use(express.static('build'));

// app.use('/', express.static(path.join(__dirname, "/client/public/index.html"))); //serves the index.html
app.listen(port, () => console.log(`Server listening on port ${port}`));
