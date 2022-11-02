// getting express, util, and uuid
const db = require('express').Router();
const { readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// route for notes data
db.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for the notes submitted
db.post('/', (req, res) => {
  
  const { noteTitle, noteText } = req.body;

  if (noteTitle && noteText) {
    // Variable for the object we will save
    const newSideNote = {
      noteTitle,
      noteText,
      sideNote_id: uuid(),
    };

    readAndAppend(newSideNote, './db/db.json');
}})



module.exports = db;
