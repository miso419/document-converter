const mammoth = require("mammoth");
const { getPath, writeFile } = require("./fileHelper");

const decomposeDocx = async (originalFilleName) => {
  const fileName = originalFilleName.split(".")[0];
  const decomposedFileName = `${fileName}_decomposed.txt`;

  const result = await mammoth.extractRawText({
    path: getPath(originalFilleName),
  });
  writeFile({ originalname: decomposedFileName, buffer: result.value });
};

const decompose = (originalFilleName) => {
  const fileEx = originalFilleName.split(".")[1].toLowerCase();
  if (fileEx === "docx") {
    return decomposeDocx(originalFilleName);
  }

  if (fileEx === "pdf") {
    // TODO
  }
};

module.exports = {
  decompose,
};
