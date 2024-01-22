const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const usersRoutes = require('./routes/users');
const petsRoutes = require('./routes/pets');
const cors = require('cors');


const dbName = process.env.DB


mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
    .then(() => { console.log(`Established a connection to the database ${dbName}`) })
    .catch(err => console.log("Something Went wrong when connecting to the DB ", err))

// routes and middleware here
// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', usersRoutes);
app.use('/api', petsRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});