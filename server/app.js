require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const createError = require("http-errors");

require('./socket-handler');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/auth', require('./routes/auth'));
app.use('/api/account', require('./routes/account'));



app.use((req, res, next) => {
    next(createError(404));
});


app.use((err, req, res, next) => {
    if(err.name === 'MongoError' || err.name === 'validationError' || err.name === 'CastError') {
        err.status = 422;
    }
    // res.status(err.status || 500).json({message: err.message || 'some error accrued.'});
    res.status(err.statusCode || 500).json({message: err.message || "we have some error occured."});
});

mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDb:', error);
    });

module.exports = app;
