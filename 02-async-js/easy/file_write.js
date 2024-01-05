console.log("writing to a file");

const fs = require("fs");
fs.writeFile("./test_2.txt", "Welcome to JS", (err) => {
  if (err) console.log(err);
});

console.log("Program ends..");
