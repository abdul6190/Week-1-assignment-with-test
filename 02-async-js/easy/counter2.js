// counter program using setTimeout()

let count = 1;

function printCounter() {
  setTimeout(() => {
    console.clear();
    console.log(count++);
    printCounter();
  }, 1000);
}

printCounter();
