const { Router } = require("express");
const { documentUpload } = require("./fileHelper");
const { getStarted, uploadFile } = require("./controller");

const router = Router();

router.get("/test", getStarted);
router.post("/file", documentUpload.single("file"), uploadFile);

module.exports = router;
