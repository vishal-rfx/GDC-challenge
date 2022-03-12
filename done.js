const {
  convertLinesToArray,
  writeArrayToLines,
  addLine,
} = require("./filehandler");

module.exports = async (commandLineArgs) => {
  if (commandLineArgs.length !== 1) {
    console.log("Error: Missing NUMBER for marking tasks as done.");
    return;
  }
  const index = commandLineArgs[0];
  const pendingFilePath = process.cwd() + "/task.txt";
  const tasks = await convertLinesToArray(pendingFilePath);
  if (index > tasks.length || index <= 0) {
    console.log(`Error: no incomplete item with index #${index} exists.`);
    return;
  }
  let completedTask = tasks[index - 1];
  tasks.splice(index - 1, 1);
  writeArrayToLines(pendingFilePath, tasks);
  completedTask = completedTask.split(" ").splice(1).join(" ");
  const completedFilePath = process.cwd() + "/completed.txt";
  addLine(completedFilePath, completedTask);
  console.log("Marked item as done.");
};
