const { MongoClient } = require("mongodb");
// import { MongoClient } from "./node_modules/mongodb";
const url = "mongodb://localhost:27017/cultivation";
const client = new MongoClient(url);

async function run() {
  try {
    const database = client.db("cultivation");
    const attributes = database.collection("attributes");

    // const will = { type: "attribute", name: "willpower" };
    // const result = await attributes.insertOne(will);
    // console.log(`A document was inserted with the _id: ${result.insertedId}`);

    const query = { name: "willpower" };
    const result = await attributes.findOne(query);
    console.log(result);
  } finally {
    await client.close();
  }
}

run();

const increaseWillpower = document.querySelector("button.increase");
const decreaseWillpower = document.querySelector("button.decrease");
const meter = document.querySelector("meter.level");

console.log("am intrat in script macar");
increaseWillpower.addEventListener("click", increaseWill());

function increaseWill() {
  console.log("am intrat");
  meter.value++;
}
