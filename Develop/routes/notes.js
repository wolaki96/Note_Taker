// require express, utils, and uuid
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
//get the route for the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

//post the route for the new notes
notes.post('/', (req, res) =>{
    console.log(req.body);
    const { noteTitle, noteText } = req.body;

    if (req.body) {
      const newNote = {
        noteTitle,
        noteText,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './db/notes.json');
      res.json(`Note added!`);
    } else {
      res.error('Error in adding note');
    }
  });


module.exports = notes;