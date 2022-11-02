// grabbing express
const express = require('express');

// grabbing the notes 
const notes = require('./notes');


const app = express();

app.use('/notes', notes);


module.exports = app;