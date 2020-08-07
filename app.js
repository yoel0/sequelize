const db = require("./models");

db.user.create({
  firstName: "Oda",
  lastName: "Nobunaga",
  age: 32,
  email: "japan@myempire.com",
});
