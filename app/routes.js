const { Router } = require("express");
const { getStarted } = require("./controller");

/*eslint-disable */
const router = Router();
/* eslint-enable */

router.get("/test", getStarted);

module.exports = router;
