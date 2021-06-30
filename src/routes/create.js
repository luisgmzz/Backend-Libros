const { Router } = require("express");
const router = Router();
const db = require("../database");

router.post("/", (req, res) => {
    db.query("SELECT * FROM books", (err, result) => {
        const newId = result.length + 1;
        const book = {
            id: newId,
            name: req.body.name,
            series: req.body.series,
            author: req.body.author,
            publisher: req.body.publisher,
        };

        db.query("INSERT INTO books SET ?", book, err => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Internal Server Error" });
            } else {
                res.status(200).send("Ok");
            }
        });
    });


});

module.exports = router;