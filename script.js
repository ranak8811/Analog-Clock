var sec = 0;
var min = 0;
var hour = 0;
var d = new Date();

setInterval(function () {
  d = new Date();
  sec = d.getSeconds() * 6;
  min = d.getMinutes() * 6;
  hour = d.getHours() * 30 + Math.round(min / 12);
  document.getElementById("sec-hand").style.transform =
    "rotate(" + sec + "deg)";
  document.getElementById("min-hand").style.transform =
    "rotate(" + min + "deg)";
  document.getElementById("hour-hand").style.transform =
    "rotate(" + hour + "deg)";
}, 1000);

const actual_time = document.getElementById("actual_time");

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var meridiem = hours < 12 ? "AM" : "PM";

  // Convert hours to 12-hour format
  hours = hours % 12 || 12; // Ensure 12-hour format

  // Pad single-digit minutes and seconds with leading zeros
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Get the date
  var date = now.toLocaleDateString();

  // Get the time zone
  var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Format the time in 12-hour mode
  var formattedTime = hours + ":" + minutes + ":" + seconds + " " + meridiem;

  // Display the time, date, and time zone in the <p> tag
  actual_time.innerText =
    "Time: " + formattedTime + " | Date: " + date + " | Time Zone: " + timeZone;

  // Schedule the updateClock function to run again after 1 second
  setTimeout(updateClock, 1000);
}

// Call the updateClock function to start updating the clock
updateClock();
