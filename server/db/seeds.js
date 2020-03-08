use group0;
db.dropDatabase();

db.shindigs.insertMany([
  {
    name: "Party at Cowans",
    eventNumber: 1,
    instructions: 'instructions go here',
    locationLat: 55.9589326,
    locationLong: -3.2139106,
  },
  {
    name: "Party at Botanics",
    eventNumber: 2,
    instructions: 'instructions go here',
    locationLat: 55.9503509,
    locationLong: -3.1918862,
  }
]);

shindig1ID = db.shindigs.findOne({name:"Party at Cowans"})._id
shindig2ID = db.shindigs.findOne({name:"Party at Botanics"})._id

db.users.insertMany([
  {
    codeName: "fox",
    sequentialRiddles: 8,
    events: [
      {shindig: shindig1ID, status: 'checked-in'},
      {shindig: shindig2ID, status: 'checked-in'}
    ]
  },
  {
    codeName: "Eugene",
    sequentialRiddles: 1,
    events: [
      {shindig: shindig1ID, status: 'not checked-in'},
      {shindig: shindig2ID, status: 'checked-in'}
    ]
  },
  {
    codeName: "Banksy",
    sequentialRiddles: 21,
    events: [
      {shindig: shindig1ID, status: 'checked-in'},
      {shindig: shindig2ID, status: 'not checked-in'}
    ]
  }
]);
