import express from "express";
import { userModel } from "./model.config.js";
import { database } from "./db.config.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const router = express.Router();

router.post("/users", async (req, res) => {
    console.log(req.body)
  const data = {
    username: req.body.username,
    coins: req.body.coins,
  };
  const user = await userModel.create(data);
  return res.status(201).send({
    success: true,
    data: user,
  });
});

router.get("/users", async (req, res) => {
  const users = await userModel.find();
  return res.status(200).send({
    success: true,
    data: users,
  });
});

app.use(router);
app.use("*", (req, res) => {
  console.log("Route not found");

  return res.status(404).send("Route not found");
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).send({
    success: false,
    message: err.message,
  });
});

app.listen(4000, () => {
  console.log(`listening on port 4000`);
});
database();
