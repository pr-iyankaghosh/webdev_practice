/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  {
    "name": "python",
    "price": "18000",
    "instructor": "Angela"
  },
  {
    "name": "javascript",
    "price": "22000",
    "instructor": "Jonas"
  },
  {
    "name": "c++",
    "price": "15000",
    "instructor": "Bjarne"
  },
  {
    "name": "data science",
    "price": "25000",
    "instructor": "Priya"
  },
  {
    "name": "react js",
    "price": "21000",
    "instructor": "Maximilian"
  },
  {
    "name": "machine learning",
    "price": "28000",
    "instructor": "Andrew"
  },
  {
    "name": "go",
    "price": "19000",
    "instructor": "Vikram"
  },
  {
    "name": "swift",
    "price": "23000",
    "instructor": "Anjali"
  },
  {
    "name": "aws certified developer",
    "price": "30000",
    "instructor": "Stephane"
  },
  {
    "name": "node.js",
    "price": "20500",
    "instructor": "Mosh"
  }
]);


// Print a message to the output window.
console.log(`Done inserting of data`);

