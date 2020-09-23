const mammoth = require("mammoth");
const { getPath, writeFile } = require("./fileHelper");

const decomposeDocx = async (originalFilleName, decomposer) => {
  const fileName = originalFilleName.split(".")[0];
  const decomposedFileName = `${fileName}_intermediate.html`;

  const result = await mammoth.convertToHtml({
    path: getPath(originalFilleName),
  });
  writeFile({ originalname: decomposedFileName, buffer: result.value });

  // return executeMammoth(tempFilePath, tempFileName)
  //     .then(uuid => executeGenerateMarkupFilePy(originalFileName, uuid, decomposer));
};

const decompose = (originalFilleName) => {
  const fileEx = originalFilleName.split(".")[1].toLowerCase();
  if (fileEx === "docx") {
    // return decomposeDocx(originalFilleName, decomposers.mammoth);
    return decomposeDocx(originalFilleName);
  }

  if (fileEx === "pdf") {
    // TODO
  }
};

module.exports = {
  decompose,
};
