const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const usersRoute = require('./routes/users');

app.use('/users', usersRoute);

app.get('/', (req, res) => {
    res.send('home server');
})

//db connect
mongoose.connect(process.env.DB_CONNECTION,
 () => {
     console.log('connected to db!');
 })

app.listen(8000);