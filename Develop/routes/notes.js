// require express, utils, uuid, and database
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/Utils');
const uuid = require('../helpers/uuid');
const db = require('../db/db.json')
//get the route for the notes
notes.get('/', (req, res) => {
  console.log(req.body);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

//post the route for the new notes
notes.post('/', (req, res) =>{
    
    const { title, text } = req.body;

    if (req.body) {
      const newNote = {
        title,
        text,
        
      };
  
      readAndAppend(newNote, './db/db.json');

      res.json(`Note added!`);
    } else {
      res.error('Error in adding note');
    }
  });


module.exports = notes;