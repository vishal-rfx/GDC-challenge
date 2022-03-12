const { convertLinesToArray } = require("./filehandler");

module.exports = async () => {
  const pendingFilepath = process.cwd() + "/task.txt";
  const pendingTasks = await convertLinesToArray(pendingFilepath);
  console.log(`Pending : ${pendingTasks.length}`);
  pendingTasks.forEach((task, idx) => {
    const arr = task.split(" ");
    const p = arr[0];
    const name = arr.splice(1).join(" ");
    console.log(`${idx + 1}. ${name} [${p}]`);
  });

  const completedFilePath = process.cwd() + "/completed.txt";
  const completedTasks = await convertLinesToArray(completedFilePath);
  console.log(`\nCompleted : ${completedTasks.length}`);
  completedTasks.forEach((task, idx) => {
    console.log(`${idx + 1}. ${task}`);
  });
};
