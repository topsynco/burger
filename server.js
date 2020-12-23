const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgercontroller.js")
const app = express();
const PORT = process.env.PORT || 2000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.use(routes)

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function(){
    console.log(`Sever is listening on: http://localhost:${PORT}`)
  })