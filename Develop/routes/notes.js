// require express
const notes = require('express').Router();

//get the route for the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

//post the route for the new notes
notes.post('/', (req, res) =>{
    console.log(req.body);
}
)

module.exports = notes;