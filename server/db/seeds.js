use group0;
db.dropDatabase();

db.shindigs.insertMany([
  {
    name: "Party at Cowans",
    shindigNumber: 0,
    instructions: "instructions go here",
    locationLat: 55.9589326,
    locationLong: -3.2139106
  },
  {
    name: "Party at Botanics",
    shindigNumber: 1,
    instructions: "instructions go here",
    locationLat: 55.9503509,
    locationLong: -3.1918862
  }
]);

shindig1ID = db.shindigs.findOne({name:"Party at Cowans"})._id
shindig2ID = db.shindigs.findOne({name:"Party at Botanics"})._id

db.users.insertMany([
  {
    codeName: "fox",
    sequentialRiddles: 8,
    shindigs: [
      {shindigID: shindig1ID, status: 'checked-in'},
      {shindigID: shindig2ID, status: 'checked-in'}
    ]
  },
  {
    codeName: "Eugene",
    sequentialRiddles: 1,
    shindigs: [
      {shindigID: shindig1ID, status: 'not checked-in'},
      {shindigID: shindig2ID, status: 'checked-in'}
    ]
  },
  {
    codeName: "Banksy",
    sequentialRiddles: 21,
    shindigs: [
      {shindigID: shindig1ID, status: 'checked-in'},
      {shindigID: shindig2ID, status: 'not checked-in'}
    ]
  }
]);
