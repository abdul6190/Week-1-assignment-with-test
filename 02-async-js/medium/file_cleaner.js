const fs = require("fs");

fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let cleanString = data
      .split(" ")
      .filter((word) => word !== "")
      .join(" ");
    fs.writeFile("./sample.txt", cleanString, (err) => {
      if (err) console.log(err);
    });
  }
});
