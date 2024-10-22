import express from "express";
import "./model/index.js";
// import mysql from "mysql2"
import router from "./routes/router.js";
import bodyParser from "body-parser";
import db from "./utils/connection.js";
import cors from "cors"
  

const app = express();
app.use(cors());


const port = process.env.PORT;

// const corsOptions = {
//   origin: 'http://localhost:3005',
//   credentials: true,
//   optionsSuccessStatus: 200
// };


await db.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running in ${port}`);
});
