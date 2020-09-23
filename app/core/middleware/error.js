module.exports = (err, req, res, next) => {
  switch (err.name) {
    case "SyntaxError": // Used for validation error
      res.status(400);
      break;
    case "ReferenceError": // Hack for forbidden
      res.status(403);
      break;
    default:
      res.status(500);
      console.error(err.message, err.stack);
      break;
  }

  res.json({ error: { message: err.message } });
};
