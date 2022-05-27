const { pipeline } = require("node:stream");
const csvtojson = require("csvtojson");
const fs = require("node:fs");
const csvFile = "./tasks/task2.2/nodejs-hw1-ex1.csv";

// const newFile = fs.createWriteStream("./tasks/task2.2/csv/newFile.txt");

pipeline(
  fs.createReadStream("./tasks/task2.2/nodejs-hw1-ex1.csv"),
  csvtojson().fromFile(csvFile),
  fs.createWriteStream("./tasks/task2.2/csv/newFile.txt"),
  (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    } else {
      console.log("Pipeline succeeded.");
    }
  }
);
