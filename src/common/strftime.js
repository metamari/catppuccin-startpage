/*
+----------+
| STRFTIME |
+----------+
Author: https://github.com/b-coimbra
Description:
silly strftime function implementation in js without the percentage notation.
based off https://strftime.org

USAGE:
new Date().strftime("H:M p - A", "America/New_York") => 21:32 AM - Thursday
new Date().strftime("m/b/Y", "Europe/London")         => 1/Jan/2018
new Date().strftime("do B Y", "Asia/Tokyo")           => 18th January 2018
*/
// Utility function for padding
// Utility function for padding
// Utility function for padding
function padNumber(number, n = 2) {
  return (Array(n).join("0") + number).slice(-n);
}

// Utility function for ordinal suffix
function ordinalNumber(number) {
  let num = number.toString();
  return {
    1: "st",
    2: "nd",
    3: "rd",
  }[num.length > 1 ? parseInt(num.split("")[1]) : num] || "th";
}

// Standalone strftime function (not attached to Date.prototype)
function strftime(date, format = "c", timeZone = "UTC") {
  const dateObj = new Date(
    date.toLocaleString("en-US", { timeZone }) // Convert the date to the correct time zone
  );

  const isValid = (date) => date instanceof Date && !isNaN(date);

  if (!isValid(dateObj)) throw dateObj;

  const month = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const result = [];
  
  const formats = {
    a: days[dateObj.getDay()].substring(0, 3),
    A: days[dateObj.getDay()],
    w: dateObj.getDay(),
    q: padNumber(dateObj.getDay()), // Use padNumber for weekday
    d: padNumber(dateObj.getDate()), // Use padNumber for day of the month
    e: dateObj.getDate(),
    b: month[dateObj.getMonth()].substring(0, 3),
    B: month[dateObj.getMonth()],
    m: padNumber(dateObj.getMonth() + 1), // Use padNumber for month
    N: padNumber(dateObj.getMonth() + 1), // Use padNumber for month (same as above)
    y: dateObj.getFullYear().toString().slice(-2),
    Y: dateObj.getFullYear(),
    H: padNumber(dateObj.getHours()), // Use padNumber for hours
    h: dateObj.getHours(),
    p: dateObj.getHours() >= 12 ? "PM" : "AM",
    o: ordinalNumber(dateObj.getDate()),
    M: padNumber(dateObj.getMinutes()), // Use padNumber for minutes
    i: dateObj.getMinutes(),
    S: padNumber(dateObj.getSeconds()), // Use padNumber for seconds
    s: dateObj.getSeconds(),
    f: dateObj.getMilliseconds(),
    c: dateObj.toDateString() + " - " + dateObj.toTimeString(),
    x: dateObj.toLocaleDateString(),
    X: dateObj.toLocaleTimeString(),
    T: new Intl.DateTimeFormat('en-US', { timeZoneName: 'short', timeZone }).format(dateObj).split(' ')[2], // Timezone abbreviation
    Z: new Intl.DateTimeFormat('en-US', { timeZoneName: 'long', timeZone }).format(dateObj).split(' ')[2], // Full timezone name
  };

  // Split format and apply the relevant formatting for each token
  format.split(/(\w|.)/m).forEach((type) => {
    if (type) result.push(typeof formats[type] === "undefined" ? type : formats[type]);
  });

  return result.join("");
}

