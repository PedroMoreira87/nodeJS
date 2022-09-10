// initial config
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// credentials
let user = process.env.DB_USER;
let password = encodeURIComponent(process.env.DB_PASSWORD);

// middlewares
app.use(
  express.urlencoded({
    extended: true
  }),
);
app.use(express.json());

// routes
const personRoutes = require('./routes/person');
app.use('/person', personRoutes);

app.get('/', (req, res) => {
  res.json({message: 'Hey express'})
});


// port
mongoose
  .connect(
    `mongodb+srv://${user}:${password}@cluster0.trjfjgq.mongodb.net/database?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Connected to MongoDB!')
    app.listen(3000)
  })
  .catch((err) => console.log(err));
