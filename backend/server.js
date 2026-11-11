require("dotenv").config();
const express = require("express");
const db = require("./db/db");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    service: "backend",
    timestamp: new Date(),
  });
});

app.listen(PORT, async () => {
  await db.query(`SELECT 1`);
  console.log("database connected");
  console.log(`server started on port ${PORT}`);
});
