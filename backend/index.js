import { PORT, mongoURL } from "./config.js";
import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (reqest, response) => {
  return response.send("pareser");
});

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("connected");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
