const express = require("express");
const userRoutes = require("./routes/user");
const app = express();

//app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/users", userRoutes);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(5000, () => {
  console.log("Listening on 5000");
});
