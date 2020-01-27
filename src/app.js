const express = require('express');
const app = express();

const indexRoute = require('./routes/index-route');
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
app.use('/', indexRoute);
module.exports = app;
