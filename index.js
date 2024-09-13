import express from "express";
import "./model/index.js";
import router from "./routes/router.js";
import bodyParser from "body-parser";
import db from "./utils/connection.js";

const app = express();
const port = process.env.PORT;

await db.sync();



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running in ${port}`);
});
