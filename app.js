// JavaScript source code
const express = require("express");
const bodyParser = require("body-parser");
const getDate = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


let items = [];
let workItem = [];

app.get("/", function (req, res) {
    
    let weekDay = getDate()[0];
    let todayDate = getDate()[1];
    
    res.render("list", { listTitle: weekDay, todaysDate: todayDate, newListItem: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if (req.body.listButton === "Work") {
        workItem.push(item);

        res.redirect("/work");
    } else {
        items.push(item);

        res.redirect("/");
    }
    
})

app.get("/work", function (req, res) {

    let todayDate = getDate()[1];
    res.render("list", { listTitle: "Work To List", todaysDate: todayDate, newListItem: workItem });
    
})
app.post("/work", function (req, res) {
    
    let item = req.body.todoList;
    workItem.push(item);
    
    res.redirect("/work");
})

app.get("/about", function (req, res) {
    res.render("about");
});


app.listen(3001, function () {
    console.log("Server started on 3001");
})