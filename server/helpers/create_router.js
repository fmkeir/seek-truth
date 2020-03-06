const express = require('express')
const ObjectId = require('mongodb').ObjectID;
const errorLog = require('./error_log.js')

const createRouter = function (collection) {
  const router = express.Router();

  return router;
};

module.exports = createRouter;
