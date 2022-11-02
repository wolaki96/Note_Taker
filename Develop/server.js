// connecting to db.json
const fs = require('fs');


//connect to express and path
const express = require('express');
const app = express();
const path = require('path');
// connect to port/server
const PORT = process.env.PORT || 3001;
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