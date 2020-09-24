const { Router } = require("express");
const { documentUpload } = require("./fileHelper");
const { getStarted, uploadFile, getRawData } = require("./controller");

const router = Router();

router.get("/test", getStarted);
router.post("/file", documentUpload.single("file"), uploadFile);
router.post("/file/raw", documentUpload.single("file"), getRawData);

module.exports = router;
