import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs");
});

app.get("/contact", (req, res) => {
  res.render(__dirname + "/views/contact.ejs");
});

app.listen(port, (res, req) => {
  console.log(`Server is running on port ${port}`);
});
