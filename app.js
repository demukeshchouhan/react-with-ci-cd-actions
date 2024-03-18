import express from "express";

const app = express();
app.use((req, res) => {
  .log(process.env.MONGODB_URL);
  res.send("This is an express app");
});
app.listen(3300, () => console.log("listening on port 3300"));
