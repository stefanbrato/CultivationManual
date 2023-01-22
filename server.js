import express from "express";
import { engine } from "express-handlebars";
import router from "./routes/handlers.js";

const app = express();

const port = 3000;

app.engine("hbs", engine());
app.set("view engine", "hbs");

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
