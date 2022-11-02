
//connect to express and path
const express = require('express');
const path = require('path');
const api = require('./routes/api');
// connecting to db.json
const fs = require('fs');
// add middleware
// const { clog } = require('./middleware/clog');


// connect to port/server
const PORT = process.env.PORT || 3001;

const app = express();


// connect to the api
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


// get the html for the index
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
// get the html for the notes
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})