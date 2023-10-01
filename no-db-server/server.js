const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

//////////////////////////////////////////////////////////
// data declaration and assignment because we will not use DB
//////////////////////////////////////////////////////

let currentUser = {
  id: "123",
  name: "John Doe",
  age: 54,
  hairColor: "brown",
  hobbies: ["swimming", "bicycling", "video games"],
};

let users = [
  {
    id: "123",
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    id: "234",
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    id: "345",
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

let products = [
  {
    id: "1234",
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD Screen, a great deal",
    rating: 4.5,
  },
  {
    id: "2345",
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    id: "3456",
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

/////////////////////////////////////////////////////////////
// APIs
///////////////////////////////////////
app.get("/current-user", (req, res, next) => {
  res.json(currentUser);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json(users.find((user) => user.id === id));
});

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: updateUser } = req.body;

  users = users.map((user) => (user.id === id ? updateUser : currentUser));

  res.json(users.find((user) => user.id === id));
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/product", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json(products.find((product) => product.id === id));
});

app.listen(3030, () => {
  console.log("Server is listening on port 3030");
});

/////////////////////////////////////////////////////
// Hello World of express.js

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
