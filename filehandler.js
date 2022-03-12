const fs = require("fs");
const readline = require("readline");

module.exports.fileExists = (filepath) => {
  return fs.existsSync(filepath);
};

module.exports.addLine = (filepath, data) => {
  fs.appendFile(filepath, data + "\n", function (err) {
    if (err) {
      throw err;
    }
  });
};

module.exports.convertLinesToArray = async (filepath) => {
  const lines = [];

  if(!fs.existsSync(filepath)){
    return lines
  }

  const lineReader = readline.createInterface({
    input: fs.createReadStream(filepath),
  });

  for await (const line of lineReader) {
    lines.push(line);
  }

  return lines;
};

module.exports.writeArrayToLines = (filepath, array) => {
  const lineWriter = fs.createWriteStream(filepath, {
    flags: "w",
  });
  for (const line of array) {
    lineWriter.write(line + "\n");
  }
};
