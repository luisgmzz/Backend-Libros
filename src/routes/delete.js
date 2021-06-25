const { Router } = require("express");
const router = Router();
const db = require("../database");

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    db.query(`DELETE FROM books WHERE id = ${id}`, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;