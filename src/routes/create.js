const { Router } = require("express");
const router = Router();
const db = require("../database");

router.post("/", (req, res) => {
    const book = {
        name: req.body.name,
        series: req.body.series,
        author: req.body.author,
        publisher: req.body.publisher,
    };

    db.query("INSERT INTO books SET ?", book, err => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;