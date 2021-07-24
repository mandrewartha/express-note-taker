const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

//Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const allRoutes = require("./routes");
app.use(allRoutes)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);



