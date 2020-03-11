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
    name: "NOEL'S SHINDIG",
    shindigNumber: 0,
    instructions: "Knock thrice.",
    locationLat: 55.9589326,
    locationLong: -3.2139106,
    riddleQuestion: "ALPHA NOVEMBER UNIFORM BRAVO INDIA CHARLIE",
    riddleAnswer: "ANUBIS",
    users: [
      {codeName: "FRASER", "checkedIn": true},
      {codeName: "NICK", "checkedIn": true},
      {codeName: "CARL", "checkedIn": true},
    ]
  },
  {
    name: "HELIOS",
    shindigNumber: 1,
    instructions: "Wear an orange article of clothing.",
    locationLat: 55.9503509,
    locationLong: -3.1918862,
    riddleQuestion: "HOTEL ECHO LIMA INDIA OSCAR SIERRA",
    riddleAnswer: "HELIOS",
    users: [
      {codeName: "SECRET AGENT EUGENE", "checkedIn": true}
    ]
  }
]);
