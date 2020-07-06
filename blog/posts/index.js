const express = require("express");
// Generate Random Id
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();

// TestCase
const posts = {};

app.use(express.json());
app.use(cors());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  console.log("posts", posts);
  // status: 201 - created
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
