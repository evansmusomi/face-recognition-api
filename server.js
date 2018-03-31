const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "john@gmail.com",
      password: "secret",
      entries: 0,
      joined: new Date()
    },
    {
      id: "124",
      name: "Jane",
      email: "jane@gmail.com",
      password: "sweets",
      entries: 0,
      joined: new Date()
    }
  ]
};

app.get("/", (req, res) => {
  res.json(database.users);
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json(database.users[0]);
  } else {
    res.status(404).json("error logging in");
  }
});

app.post("/register", (req, res) => {
  const { email, password, name } = req.body;

  database.users.push({
    id: "125",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  });
  res.json(database.users[database.users.length - 1]);
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;

  database.users.forEach(user => {
    if (user.id === id) {
      return res.json(user);
    }
  });

  res.status(400).json("profile not found");
});

app.put("/image", (req, res) => {
  const { id } = req.body;

  database.users.forEach(user => {
    if (user.id === id) {
      user.entries++;
      return res.json(user.entries);
    }
  });

  res.status(400).json("entries not found");
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
