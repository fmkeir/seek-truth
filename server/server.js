const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then(client => {
    const db = client.db('group0');
    const usersCollection = db.collection('users');
    const locationsCollection = db.collection('locations');

    const usersRouter = createRouter(usersCollection);
    const locationsRouter = createRouter(locationsCollection);

    app.use('/api/users', usersRouter);
    app.use('/api/locations', locationsRouter);
  })
  .catch(err => console.error(err));

app.listen(3000, function() {
  console.log(`App running on port: ${this.address().port}`);
});
