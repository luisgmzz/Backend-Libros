const { Router } = require("express");
const router = Router();

const create = require("./create");
const read = require("./read");
const update = require("./update");
const del = require("./delete");

router.use("/create", create);
router.use("/read", read);
router.use("/update", update);
router.use("/delete", del);

module.exports = router;