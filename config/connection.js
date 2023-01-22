import { mongoose } from "mongoose";

const url = "mongodb://localhost:27017/cultivation";

const db = mongoose.connection;
const config = {};

mongoose.connect(url, config);

db.on("open", () => {
  console.log(`You are connected to Mongo`);
})
  .on("error", (err) => {
    console.log(err);
  })
  .on("close", () => {
    console.log(`You are no longer connected to Mongo`);
  });

export { mongoose };
