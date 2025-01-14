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

Date.prototype.strftime = function (format = "c", timeZone = "UTC") {
  const date = new Date(
    this.toLocaleString("en-US", { timeZone }) // Convert the date to the correct time zone
  );

  const isValid = (date) => date instanceof Date && !isNaN(date);

  if (!isValid(date)) throw date;

  Number.prototype.pad = function (n = 2) {
    return (Array(n).join("0") + this).substr(-n);
  };

  Number.prototype.ord = function () {
    return (
      {
        1: "st",
        2: "nd",
        3: "rd",
      }[(num = this.toString()).length > 1 ? parseInt(num.split("")[1]) : num] || "th"
    );
  };

  const month = [
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
    ],
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    result = [],
    formats = {
      a: days[date.getDay()].substr(0, 3),
      A: days[date.getDay()],
      w: date.getDay(),
      q: date.getDay().pad(),
      d: date.getDate().pad(),
      e: date.getDate(),
      b: month[date.getMonth()].substr(0, 3),
      B: month[date.getMonth()],
      m: date.getMonth() + 1,
      N: (date.getMonth() + 1).pad(),
      y: date.getFullYear().toString().slice(-2), // Corrected short year
      Y: date.getFullYear(),
      H: date.getHours().pad(),
      h: date.getHours(),
      p: date.getHours() >= 12 ? "PM" : "AM",
      o: date.getDate().ord(),
      M: date.getMinutes().pad(),
      i: date.getMinutes(),
      S: date.getSeconds().pad(),
      s: date.getSeconds(),
      f: date.getMilliseconds(),
      c: date.toDateString() + " - " + date.toTimeString(),
      x: date.toLocaleDateString(),
      X: date.toLocaleTimeString(),
      T: new Intl.DateTimeFormat('en-US', { timeZoneName: 'short', timeZone }).format(date).split(' ')[2], // Timezone abbreviation
      Z: new Intl.DateTimeFormat('en-US', { timeZoneName: 'long', timeZone }).format(date).split(' ')[2], // Full timezone name
    };

  format.split(/(\w|.)/m).forEach((type) => {
    if (type) result.push(typeof formats[type] === "undefined" ? type : formats[type]);
  });

  return result.join("");
};

