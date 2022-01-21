var express = require('express');
var path = require('path');
var logger = require('morgan');

require('./src/config/database');
const cors = require('cors');
const usersRouter = require('./src/routes/users');
const notesRouter = require('./src/routes/notes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;
