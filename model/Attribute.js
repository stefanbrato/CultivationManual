import mongoose from "mongoose";
const { Schema, model } = mongoose;

const attributeSchema = new Schema({
  type: String,
  name: String,
});

const Attribute = model("Attribute", attributeSchema);

export { Attribute };
