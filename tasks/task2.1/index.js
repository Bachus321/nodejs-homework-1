const fs = require("fs");
const csvtojson = require("csvtojson");
const csvFile = "./tasks/task2.1/nodejs-hw1-ex1.csv";

// using encoder
let dataWithEncoder = fs.readFileSync(csvFile, "utf8");
console.log(dataWithEncoder);

csvtojson()
  .fromFile(csvFile)
  .then((jsonObj) => {
    fs.mkdir("./tasks/task2.1/csv", (err) => {
      err && console.error(err.message);
    });
    fs.open("./tasks/task2.1/csv/csvToJson.txt", "w", function (err, id) {
      if (err) {
        console.error(err.message);
        return;
      }
      jsonObj.forEach((item) => {
        fs.write(id, JSON.stringify(item) + "\n", (err) => {
          if (err) {
            console.error(err.message);
            return;
          }
          fs.close(id, () => {
            console.log("closed!");
          });
        });
      });
    });
  });
