use group0;
db.dropDatabase();

shindig1ID = db.shindigs.findOne({name:"Party at Cowans"})._id
shindig2ID = db.shindigs.findOne({name:"Party at Botanics"})._id

db.users.insertMany([
  {
    codeName: "fox",
    sequentialRiddles: 8
  },
  {
    codeName: "Eugene",
    sequentialRiddles: 1
    ]
  },
  {
    codeName: "Banksy",
    sequentialRiddles: 21
    ]
  }
]);

db.shindigs.insertMany([
  {
    name: "Party at Cowans",
    shindigNumber: 0,
    instructions: "instructions go here",
    locationLat: 55.9589326,
    locationLong: -3.2139106,
    riddleQuestion: "what has to be broken before you can use it?",
    riddleAnswer: "an egg",
    users: [
      {codeName: "fox"},
      {codeName: "Banksy"},
    ]
  },
  {
    name: "Party at Botanics",
    shindigNumber: 1,
    instructions: "instructions go here",
    locationLat: 55.9503509,
    locationLong: -3.1918862,
    riddleQuestion: "what gets wet while drying?",
    riddleAnswer: "a towel",
    users: [
      {codeName: "Eugene"}
    ]
  }
]);
