const db = require("./models");
const { defaults } = require("pg");

// db.user
//   .create({
//     firstName: "Oda",
//     lastName: "Nobunaga",
//     age: 28,
//     email: "japan@mymother.com",
//   })
//   .then((data) => {
//     console.log(data);
//   });

// search by id
db.user
  .findOne({
    where: { id: 1 },
  })
  .then((user) => {
    console.log("==== user 1 ====");
    console.log(user.dataValues);
  });

// search by firstName
db.user
  .findOne({
    where: { firstName: "Oda" },
  })
  .then((user) => {
    console.log("==== user 2 ====");
    console.log(user.dataValues);
  });

// search by email
db.user
  .findOne({
    where: { email: "japan@mymother.com" },
  })
  .then((user) => {
    console.log("==== user 3 ====");
    console.log(user.dataValues);
  });

// find or create
db.user
  .findOrCreate({
    where: {
      firstName: "HE",
      lastName: "MAN",
    },
    defaults: { age: 40, email: "heman@theuniverse.com" },
  })
  .then(([user, created]) => {
    console.log(`This was created on ${created}`);
    console.log(user.dataValues);
  });

let queryOne = {
  where: {
    firstName: "Pika",
    lastName: "chu",
  },
  defualts: { age: 2, email: "ash@gotme.com" },
};

db.user.findOrCreate(queryOne).then(([user, created]) => {
  console.log(created);
  console.log(user.dataValues);
});

db.user.findAll().then((users) => {
  users.forEach((user) => {
    console.log(user.dataValues.firstName);
  });
});

// db.user.findAll()
//   .then(users => {
//     for (let i = 0; i < users.length; i++) {
//       let eachUser = users[i].dataValues;
//       // console.log(eachUser);
//       let firstName = eachUser.firstName;
//       console.log(firstName);
//     }
//   });
