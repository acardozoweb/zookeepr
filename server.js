const fs = require('fs');
const path = require('path');
const { animals } = require("./data/animals");
// require express.js
const express = require("express");
// specify port
const PORT = process.env.PORT || 3001;
// instantiate the server
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

// make server listen for requests
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});