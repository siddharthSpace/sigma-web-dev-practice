// Select the database to use
use('sigmaDatabase');

// Insert multiple documents into the sales collection
db.getCollection('sales').insertMany([
  {
    "_id": ObjectId("69709f902f7c39913f8173c8"),
    "name": "Java",
    "Price": 20000,
    "Instructor": "Sid"
  },
  {
    "_id": ObjectId("69709f902f7c39913f8173c9"),
    "name": "Python",
    "Price": 18000,
    "Instructor": "Rahul"
  },
  {
    "_id": ObjectId("69709f902f7c39913f8173ca"),
    "name": "Web Development",
    "Price": 25000,
    "Instructor": "Anita"
  },
  {
    "_id": ObjectId("69709f902f7c39913f8173cb"),
    "name": "Data Science",
    "Price": 30000,
    "Instructor": "Amit"
  }
]);

// Print a message to the output window
print('Done Inserting Data');

