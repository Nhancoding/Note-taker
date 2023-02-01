const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static("./develop/public"));

const noteRoutes = require("./develop/taskmaker/tasktaker")
app.use("/api",noteRoutes);

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./develop/public/notes.html"))
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./develop/public/index.html"))
});

app.listen(3000, function() {
    console.log("Listen on port 3000");
})