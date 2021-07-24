const express = require('express');
const router = express.Router()
const fs = require("fs")
const util = require('util');

const readFromFile = util.promisify(fs.readFile);


/**Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
 const writeToFile = (destination, content) =>
 fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
   err ? console.error(err) : console.info(`\nData written to ${destination}`)
 );

/**
*  Function to read data from a given a file and append some content
*  @param {object} content The content you want to append to the file.
*  @param {string} file The path to the file you want to save to.
*  @returns {void} Nothing
*/
const readAndAppend = (content, file) => {
 fs.readFile(file, 'utf8', (err, data) => {
   if (err) {
     console.error(err);
   } else {
     const parsedData = JSON.parse(data);
     parsedData.push(content);
     writeToFile(file, parsedData);
   }
 });
};

router.get("/api/notes", (req, res) => {
    console.info(`${req.method} request received for feedback`);
    //read file and send the response as json
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  })

  router.post("/api/notes", (req,res)=> {
    console.log(req.body)
    readAndAppend(req.body, "./db/db.json")
  })
 
  module.exports = router