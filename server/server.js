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
    const shindigsCollection = db.collection('shindigs');
    const riddlesCollection = db.collection('riddles');

    const usersRouter = createRouter(usersCollection);
    const shindigsRouter = createRouter(shindigsCollection);
    const riddlesRouter = createRouter(riddlesCollection);

    app.use('/api/users', usersRouter);
    app.use('/api/shindigs', shindigsRouter);
    app.use('/api/riddles', riddlesRouter);
  })
  .catch(err => console.error(err));

app.listen(3000, function() {
  console.log(`App running on port: ${this.address().port}`);
});
