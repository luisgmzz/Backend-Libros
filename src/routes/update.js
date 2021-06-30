const { Router } = require("express");
const router = Router();
const db = require("../database");

// ¿Qué pasaría si un día descubrieras que, en realidad, eres hijo de un dios griego que debe cumplir una misión secreta? Pues eso es lo que le sucede a Percy Jackson, que a partir de ese momento se dispone a vivir los acontecimientos más emocionantes de su vida. Expulsadi de seis colegios, Percy padece dislexia y dificuñtades para concentrarse, o al menos esa es la versión oficial. Objeto de burlas por inverntarse historias fantásticas, ni siquiera él mismo acaba de creérselas hasta el dia que los dioses del Olimpo le revelan la verdad: Percy es nada menos que un semidiós, es decir, el hijo de un dios y una mortal. Y como tal ha de descubrir quién ha robado el rayo de Zeus y asi evitar que estalle una guerra entre los dioses. Para cumplir la misión contará con la ayuda de sus amigos Grover, un joven sátiro, y Annabeth, hija de Atenea. 
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, series, author, publisher, description, imageurl } = req.body;
    db.query(`UPDATE books SET name = "${name}", series = "${series}", author = "${author}", publisher = "${publisher}", description = "${description}", imageurl = "${imageurl}" WHERE id = ${id}`, (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            res.status(200).send("Ok");
        }
    });
});

module.exports = router;