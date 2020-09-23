const { writeFile } = require("./fileHelper");
const { decompose } = require("./decomposer");

const getStarted = async (req, res, next) => {
  return res.status(200).send({ result: "all good" });
};

const uploadFile = async (req, res, next) => {
  writeFile(req.file);
  await decompose(req.file.originalname);
  return res.status(200).send({ cool: "cool" });
};

module.exports = {
  getStarted,
  uploadFile,
};
