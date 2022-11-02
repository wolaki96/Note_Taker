// require express, utils, uuid, and database
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/Utils');
const uuid = require('../helpers/uuid');
const db = require('../db/db.json')
//get the route for the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

//post the route for the new notes
notes.post('/', (req, res) =>{
    // nod
    const { noteTitle, noteText } = req.body;

    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');

      res.json(`Note added!`);
    } else {
      res.error('Error in adding note');
    }
  });


module.exports = notes;