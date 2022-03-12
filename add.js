const fileHandler = require("./filehandler");

const compare = (line1, line2) => {
  return line1[0] - line2[0];
};

module.exports = async (commandLineArgs) => {
  if (commandLineArgs.length < 2) {
    console.log("Error: Missing tasks string. Nothing added!");
    return;
  }
  const priority = commandLineArgs[0];
  if (priority < 0) {
    console.log("Error: Priority should be greater than or equal to 0");
    return;
  }
  const taskName = commandLineArgs[1];
  const filepath = process.cwd() + "/task.txt";
  const data = priority + " " + taskName;
  fileHandler.addLine(filepath, data);
  const lines = await fileHandler.convertLinesToArray(filepath);
  lines.sort(compare);
  fileHandler.writeArrayToLines(filepath, lines);
  console.log(`Added task: "${taskName}" with priority ${priority}`);
};
