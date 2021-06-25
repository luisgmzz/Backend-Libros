const { Router } = require("express");
const router = Router();
const db = require("../database");

router.get("/", (req, res) => {
    db.query("SELECT * FROM books", (err, result) => {
        if (err) console.log(err.message);
        if (result.length > 0) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM books where id = ${id}`, (err, result) => {
        if (err) console.log(err.message);
        if (result.length > 0) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }

    });
});

module.exports = router;