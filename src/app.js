const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
const exphbs=require('express-handlebars');
const router = require('./routes/index');
const helpers=require('./views/helpers/index');
// create express app
const app = express();

// express config
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
//   express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
// );

app.set("views",path.join(__dirname,"views"));
app.set("view engine","hbs");

app.engine("hbs",exphbs({
  extname:"hbs",
  layoutsDir:path.join(__dirname,"views","layouts"),
  defaultLayout:"main",
  partialsDir:path.join(__dirname,"views","partials"),
  helpers:helpers

}))


app.use(router);

// export the app
module.exports = app;
