import { mongoose } from "./connection.js";
import { Attribute } from "../model/Attribute.js";

const orm = {
  getInfo: async function () {
    try {
      console.log("am apelat get info");
      const result = await Attribute.find({});
      console.log(result);
    } finally {
    }
  },
};

export { orm };
