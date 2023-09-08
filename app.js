const date = document.querySelector(".date");
const time = document.querySelector(".time");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let week = weekday[d.getDay()];
const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();

date.textContent = `${week}-${day}/${month}/${year}, ${hour}:${min}`;

// const now = new Date();
console.log(now);
console.log(Date.now());
