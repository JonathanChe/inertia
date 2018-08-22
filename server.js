const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config()
const router = require('./router');

// connect to database
mongoose.connect(process.env.MONGO_URL);
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static('build'));

// all routes defined here. 
router(app);

app.listen(port, () => console.log(`Server listening on port ${port}`));


/**  not used yet 
|--------------------------------------------------
|  
// app.use(express.static(path.join(__dirname, '/client/public')));
// app.use('/', express.static(path.join(__dirname, "/client/public/index.html"))); //serves the index.html
| 
|--------------------------------------------------
*/