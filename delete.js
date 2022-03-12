const { convertLinesToArray, writeArrayToLines } = require("./filehandler");

module.exports = async (commandLineArgs) => {
  if (commandLineArgs.length !== 1) {
    console.log("Error: Missing NUMBER for deleting tasks.");
    return;
  }
  const index = commandLineArgs[0];
  const filepath = process.cwd() + "/task.txt";
  const tasks = await convertLinesToArray(filepath);
  if (index > tasks.length || index <= 0) {
    console.log(
      `Error: task with index #${index} does not exist. Nothing deleted.`
    );
    return;
  }
  tasks.splice(index - 1, 1);
  writeArrayToLines(filepath, tasks);
  console.log(`Deleted task #${index}`);
};
