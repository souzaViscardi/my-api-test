require('./src/database')
const express = require('express')
const app = express();
const serverless = require('serverless-http');
const routes = require('./src/routes.js')
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.use(routes)
module.exports.handler = serverless(app);