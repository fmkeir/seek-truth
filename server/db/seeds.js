use group0;
db.dropDatabase();

db.users.insertMany([
  {
    codeName: "fox",
    sequentialRiddles: 8
  },
  {
    codeName: "Eugene",
    sequentialRiddles: 1
  },
  {
    codeName: "Banksy",
    sequentialRiddles: 21
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
      {codeName: "fox", "checkedIn": false},
      {codeName: "Banksy", "checkedIn": true},
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
      {codeName: "Eugene", "checkedIn": false}
    ]
  }
]);
