const axios = require("axios");
const { writeFile } = require("./fileHelper");
const { decompose } = require("./decomposer");

const cvParserRoot = "http://0.0.0.0:4005";

const getStarted = async (req, res, next) => {
  return res.status(200).send({ result: "all good" });
};

const uploadFile = async (req, res, next) => {
  writeFile(req.file);
  const decomposedText = await decompose(req.file.originalname);
  const result = await axios.post(`${cvParserRoot}`, { decomposedText });
  return res.status(200).send(result.data);
};

const getRawData = async (req, res, next) => {
  writeFile(req.file);
  const decomposedText = await decompose(req.file.originalname);
  const result = await axios.post(`${cvParserRoot}/raw`, { decomposedText });
  return res.status(200).send(result.data);
};

module.exports = {
  getStarted,
  uploadFile,
  getRawData,
};
