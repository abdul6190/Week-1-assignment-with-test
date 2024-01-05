setInterval(() => {
  console.clear();
  let hours = new Date().getHours().toString().padStart(2, "0");
  let minutes = new Date().getMinutes().toString().padStart(2, "0");
  let seconds = new Date().getSeconds().toString().padStart(2, "0");
  console.log(`${hours}:${minutes}:${seconds}`);
  let s = "AM";
  if (hours > 12) s = "PM";
  console.log(`${hours - 12}:${minutes}:${seconds} ${s}`);
}, 1000);
