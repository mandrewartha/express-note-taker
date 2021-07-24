const express = require('express');
const router = express.Router()
const fs = require('fs');
const util = require('util');
const path = require("path")

// GET Route for notes.html
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for index.html
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router