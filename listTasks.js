const { convertLinesToArray, fileExists } = require("./filehandler");

module.exports = async () => {
  const filepath = process.cwd() + "/task.txt";
  if (!fileExists(filepath)) {
    console.log("There are no pending tasks!");
    return;
  }
  const tasks = await convertLinesToArray(filepath);
  if (tasks.length === 0) {
    console.log("There are no pending tasks!");
    return;
  }
  tasks.forEach((task, idx) => {
    const arr = task.split(" ");
    const p = arr[0];
    const name = arr.splice(1).join(" ");
    console.log(`${idx + 1}. ${name} [${p}]`);
  });
};
