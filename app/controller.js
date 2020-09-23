const { writeFile } = require("./fileHelper");
const getStarted = async (req, res, next) => {
  return res.status(200).send({ result: "all good" });
};

const uploadFile = async (req, res, next) => {
  // const { originalname, size, buffer } = req.file || {};
  writeFile(req.file);
  return res.status(200).send({ cool: "cool" });
};

module.exports = {
  getStarted,
  uploadFile,
};
