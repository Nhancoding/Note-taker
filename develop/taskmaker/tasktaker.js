const fs = require("fs");
const express = require("express");
const router = express.Router();
const uuid = require("uuid").v4;

router.get("/notes", (req, res) => {
  fs.readFile("./Develop/db/db.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("oh no!");
      throw err;
    } else {
      const notesData = JSON.parse(data);
      res.json(notesData);
    }
  });
});

router.post("/notes", (req, res) => {
  fs.readFile("./Develop/db/db.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("oh no!");
      throw err;
    } else {
      const notesData = JSON.parse(data);
      const newNotes = {
        title: req.body.title,
        text: req.body.text,
        tip_id: uuid(),
      };
      notesData.push(newNotes);
      fs.writeFile(
        "./Develop/db/db.json",
        JSON.stringify(notesData, null, 4),
        (err) => {
          if (err) {
            res.status(500).send("oh no!");
            throw err;
          } else {
            res.send("Notes added!");
          }
        }
      );
    }
  });
});

module.exports = router;
