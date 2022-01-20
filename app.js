const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2022, 03, 30, 07, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay 
  + 10, 07, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `bouquet flies on ${weekday}, 
${month} ${date} ${year} ${hours}:${minutes}pm`;

//future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1second = 1000ms
  // 1min = 60s
  // 1 hr = 60mins
  // 1 day = 24hrs

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor ((t % oneDay) / oneHour);
  let minues = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  
  // set values array
  const values = [days,hours,minutes,seconds];

function format(item) {
  if(item < 10) {
    return item = `0${value}`
  }
  return item;
}

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, the bouquet
    has been tossed! </h4>`
  }

};
//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();