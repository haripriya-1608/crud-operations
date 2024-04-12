const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const posts = require("./routes/posts.js")

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", posts);

mongoose
  .set({ strictQuery: false })
  .connect("mongodb://localhost:27017/crud")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(`Could not connected to MongoDB... ${err}`));

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));