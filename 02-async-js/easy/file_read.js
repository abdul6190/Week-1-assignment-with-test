const fs = require("fs");

fs.readFile("./test.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// Expensive operation
var count = 0;
for (let i = 1; i <= 10000000000; i++) {
  count += i;
}
console.log(`Value of count is ${count}`);
