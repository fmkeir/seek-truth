use shindig-server;
db.dropDatabase();

db.users.insertMany([
  {
    codeName: "Monty",
    sequentialRiddles: 8
  },
  {
    codeName: "Eugene",
    sequentialRiddles: 1
  },
  {
    codeName: "Paul",
    sequentialRiddles: 21
  },
  {
    codeName: "Banksy",
    sequentialRiddles: 5
  },
  {
    codeName: "Cowan and his sons",
    sequentialRiddles: 7
  }
]);

db.shindigs.insertMany([
  {
    name: "NOEL'S SHINDIG",
    shindigNumber: 0,
    instructions: "Knock thrice.",
    locationLat: 55.9589326,
    locationLong: -3.2139106,
    riddleQuestion: "ALPHA NOVEMBER UNIFORM BRAVO INDIA SIERRA",
    riddleAnswer: "anubis",
    users: [
      {codeName: "Monty", "checkedIn": false},
      {codeName: "Banksy", "checkedIn": true},
      {codeName: "Paul", "checkedIn": true}
    ]
  },
  {
    name: "HELIOS",
    shindigNumber: 1,
    instructions: "Wear an orange article of clothing.",
    locationLat: 55.9503509,
    locationLong: -3.1918862,
    riddleQuestion: "HOTEL ECHO LIMA INDIA OSCAR SIERRA",
    riddleAnswer: "helios",
    users: [
      {codeName: "Eugene", "checkedIn": true}
    ]
  }
]);
