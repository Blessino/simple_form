const express = require('express');

const bodyParser = require('body-parser');

// const path = require('path');

const app = express();
const port = 3000;

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.render('result', { name, email });
});

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}...`);
});
