const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const errorLog = require('./helpers/error_log.js');
const ObjectId = require('mongodb').ObjectID;

const app = express();
app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://db:27017/')
  .then(client => {
    console.log('mongoDB connected');
    
    const db = client.db('shindig-server');
    const usersCollection = db.collection('users');
    const shindigsCollection = db.collection('shindigs');

    const usersRouter = createRouter(usersCollection);
    const shindigsRouter = createRouter(shindigsCollection);

    const riddlesRouter = express.Router();
    riddlesRouter.get('/', (req, res) =>{
      shindigsCollection.find().toArray()
      .then(docs => docs.map(doc => {
        return {
          shindigId: doc._id,
          riddleQuestion: doc.riddleQuestion
        }
      }))
      .then(riddles => res.json(riddles))
      .catch(errorLog)
    })

    riddlesRouter.post('/submit-answer', (req, res) => {
      const body = req.body;
      const userAnswer = body.userAnswer;
      // userAnswer.toLowerCase();
      const shindigId = body.shindigId;

      shindigsCollection.findOne({
        _id: ObjectId(shindigId)
      })
        .then(shindig => {
          if (userAnswer === 'hunter2') {
            res.json('admin')
          }
          else if (userAnswer === shindig.riddleAnswer) {
            res.json(shindig)
          }
          else {
            res.json({ error: 'ERROR' })
          }
        })
        .catch(errorLog)
    })

    app.use('/api/users', usersRouter);
    app.use('/api/shindigs', shindigsRouter);
    app.use('/api/riddles', riddlesRouter);
  })
  .catch(err => console.error(err));

app.listen(3000, function() {
  console.log(`App running on port: ${this.address().port}`);
});
