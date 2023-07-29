import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/Public"));

app.get("/", (req, res) => {
  res.render(__dirname + "/Views/index");
});

app.get("/contact", (req, res) => {
  res.render(__dirname + "/Views/contact");
});

app.listen(port, (res, req) => {
  console.log(`Server is running on port ${port}`);
});
