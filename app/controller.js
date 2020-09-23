const getStarted = async (req, res, next) => {
  return res.status(200).send({ result: "all good" });
};

module.exports = {
  getStarted,
};
