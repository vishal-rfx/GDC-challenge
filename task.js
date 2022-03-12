#!/usr/bin/env node

const help = require("./help");
const add = require("./add");
const listTasks = require("./listTasks");
const del = require("./delete");
const done = require("./done");
const report = require("./report");

const main = () => {
  const args = process.argv;
  const commandName = args[2];
  const commandLineArgs = args.slice(3);

  switch (commandName) {
    case "help":
      help();
      break;
    case undefined:
      help();
      break;
    case "add":
      add(commandLineArgs);
      break;
    case "ls":
      listTasks();
      break;
    case "del":
      del(commandLineArgs);
      break;
    case "done":
      done(commandLineArgs);
      break;
    case "report":
      report();
      break;
    default:
      console.log("Invalid command");
      help();
  }
};

main();
