const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const posts = require("./routes/posts.js")

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(posts);

mongoose
  .set({ strictQuery: false })
  .connect("mongodb+srv://haripriya:ZsNPhtig4sFtAMtT@cluster0.pesoqz3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(`Could not connected to MongoDB... ${err}`));

// const port = process.env.PORT || 9000;

app.listen(5000, () => console.log(`Listening on port 5000`));