require('dotenv').config();
const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static("static"));

app.get('/', (req, res)=>{
  res.render('home');
})

app.use('/', require('./routes/cities'))

app.get('/*', (req, res) => {
  res.render('404');
})

app.listen(process.env.PORT || 8000, console.log(`🎧☕️ You're listening to the sweet sounds of port ${process.env.PORT || 8000}☕🎧`));