import express from 'express';
import bodyParser from 'body-parser';
import db from './config/database';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes')(app, db);

const server = app.listen(9000);

module.exports = server;



