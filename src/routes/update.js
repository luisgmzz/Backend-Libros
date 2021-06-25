const { Router } = require("express");
const router = Router();
const db = require("../database");

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, series, author, publisher } = req.body;
    db.query(`UPDATE books SET name = "${name}", series = "${series}", author = "${author}", publisher = "${publisher}" WHERE id = ${id}`, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;