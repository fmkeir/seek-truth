use group0;
db.dropDatabase();

db.locations.insertMany([
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

event1ID = db.locations.findOne({name:"Party at Cowans"})._id
event2ID = db.locations.findOne({name:"Party at Botanics"})._id

db.users.insertMany([
  {
    codeName: "fox",
    sequentialRiddles: 8,
    events: [
      {event: event1ID, status: 'checked-in'},
      {event: event2ID, status: 'checked-in'}
    ]
  },
  {
    codeName: "Eugene",
    sequentialRiddles: 1,
    events: [
      {event: event1ID, status: 'not checked-in'},
      {event: event2ID, status: 'checked-in'}
    ]
  },
  {
    codeName: "Banksy",
    sequentialRiddles: 21,
    events: [
      {event: event1ID, status: 'checked-in'},
      {event: event2ID, status: 'not checked-in'}
    ]
  }
]);
