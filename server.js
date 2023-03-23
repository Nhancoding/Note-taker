// const express = require("express");
// const app = express();
// const path = require("path");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));

// app.use(express.static("./develop/public"));

// const noteRoutes = require("./develop/taskmaker/tasktaker")
// app.use("/api",noteRoutes);


// app.listen(3000, function() {
//     console.log("Listen on port 3000");
// })

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// app.get("/notes", (req, res)=>{
//     res.sendFile(__dirname+"/public/notes.html");
// })

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

