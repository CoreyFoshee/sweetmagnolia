import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render(__dirname + "/index.ejs");
});

app.get("/contact", (req, res) => {
  res.render(__dirname + "/contact.ejs");
});

app.listen(port, (res, req) => {
  console.log(`Server is running on port ${port}`);
});
