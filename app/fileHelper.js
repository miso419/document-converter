const multer = require("multer");
const fs = require("fs");

const getPath = (fileName) => `./files/${fileName}`;

const documentUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10485760, files: 100 }, // 10MB per file
});

const writeFile = ({ originalname, buffer }) => {
  fs.writeFileSync(getPath(originalname), buffer);
};

module.exports = {
  getPath,
  documentUpload,
  writeFile,
};
