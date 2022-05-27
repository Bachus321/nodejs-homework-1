process.stdin.resume();

console.log("Enter the data to reverse it : ");

process.stdin.on("data", function (data) {
  process.stdout.write(data.reverse());
});
