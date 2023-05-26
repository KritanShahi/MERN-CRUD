const express = require('express');
const app = express();
const mongoose = require('mongoose');


// Your routes and middleware will go here

const port = 3000;


const uri = 'mongodb://localhost:27017/my-database'; // Replace with your MongoDB connection string

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


    // Define a Mongoose schema
    const personSchema = new mongoose.Schema({
      name: String,
      age: Number,
    });

    // Create a Mongoose model
    const Person = mongoose.model('Person', personSchema);

    // Create a new document using the model
    const john = new Person({ name: 'John', age: 30 });

    // Save the document to the database
    john.save()
      .then((result) => {
        console.log('Document saved:', result);
      })
      .catch((error) => {
        console.error('Error saving document:', error);
      });

      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    
  
