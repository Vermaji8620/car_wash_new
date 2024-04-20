import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
import cors from "cors";
import process from "process";
import payment from "./controllers/payment.js";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("This is the Default route");
});

app.use("/payment", payment);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server up running at", PORT);
});
