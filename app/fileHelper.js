const multer = require("multer");
const { StringDecoder } = require("string_decoder");
const fs = require("fs");

const getPath = (fileName) => `./files/${fileName}`;

const documentUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10485760, files: 100 }, // 10MB per file
});

const writeFile = ({ originalname, buffer }) => {
  fs.writeFileSync(getPath(originalname), buffer);
};

function downloadMaterial(s3Key, path) {
  //   const params = {
  //     Bucket: rootBucket,
  //     Key: s3Key,
  //   };
  //   return new Promise((resolve, reject) => {
  //     getAwsS3Instance().getObject(params, (err, data) => {
  //       if (err) {
  //         return reject(err);
  //       }
  //       fs.writeFileSync(path, data.Body.toString());
  //       return resolve(path);
  //     });
  //   });
}

function convertFileBufferToStr(buffer) {
  // https://nodejs.org/api/string_decoder.html
  const decoder = new StringDecoder("utf8");
  return buffer ? decoder.write(buffer) : "";
}

function deleteFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

module.exports = {
  getPath,
  documentUpload,
  writeFile,
  convertFileBufferToStr,
  deleteFilePromise,
};
