const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ceramah",
});

app.get("/", (re, res) => {
  return res.json("From backend side");
});

app.get("/list", (req, res) => {
  const sql = "SELECT * FROM list";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8080, () => {
  console.log("listening");
});
