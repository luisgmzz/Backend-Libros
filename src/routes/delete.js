const { Router } = require("express");
const router = Router();
const db = require("../database");

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    db.query(`DELETE FROM books WHERE id = ${id}`, (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            res.status(200).send("Ok");
        }
    });
});

module.exports = router;