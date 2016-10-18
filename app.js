//champions league API

const express = require('express');
const app = express();
//specifying directory of static assets;
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

const movies = require('./routes/routes');

movies(app);
