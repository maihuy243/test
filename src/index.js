const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

//HTTP Logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
//Template Engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

//folder views
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/infomation', (req, res) => {
  res.render('infomation');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
