'use strict';


var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

// var notesRouter = express.Router();

// require('./routes/notes_routes')(notesRouter);

// app.use('/api', notesRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server running on port ' + (process.env.PORT || 3000));
});