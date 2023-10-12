/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...)

function isADate(maybeDate) {
  return maybeDate instanceof Date;
}

console.log("is a date: ", isADate(new Date()));

// 2. Create today's date

const todayDate = new Date();

// 3. Get the current timestamp (using a static method of Date)

const timestamp = todayDate.getTime();
console.log(timestamp);

// 4. Create a date to represent next Christmas Day

const nextXmasDay = new Date(2023, 11, 25, 0, 0, 0, 0);

// 5. Work out how many days it is until christmas
const daysTillXmas = Math.ceil(
  Math.abs(todayDate.getTime() - nextXmasDay.getTime()) / (1000 * 60 * 60 * 24)
);
console.log(`There are ${daysTillXmas} days until Christmas`);

// Get difference between now and xmas

// Divide by number of ms in 1 day:
// milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second

// Math.floor for whole days; Math.ceil to include today

// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date2", date2);

if (date1.getTime() === date2.getTime()) {
  console.log("Date 1 is the same as date 2");
} else {
  const earlier = date1.getTime() < date2.getTime() ? "Date 1" : "Date 2";
  console.log(`${earlier} is the earlier date of date 1 and date 2`);
}

// 7. How do I test if a date is valid? ****

const isDateValid = date1 instanceof Date && !isNaN(date1.getTime());
console.log("Is date valid:", isDateValid);

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object

const now = new Date();

console.log("now:", now);

const monthTwoDigits = String(now.getMonth() + 1).padStart(2, 0);
const dayTwoDigits = String(now.getDate()).padStart(2, 0);

console.log(`${monthTwoDigits}-${dayTwoDigits}-${now.getFullYear()}`);

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')

console.log("nowENGB", now.toLocaleDateString("en-GB"));
console.log("nowDEDE", now.toLocaleDateString("de-DE"));

// 10. Output the current time in hours, mins & seconds

console.log(now.toLocaleTimeString("EN-gb"));

// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.

let clockTime = new Date().getTime();

setInterval(() => {
  clockTime += 1000;
  console.log(new Date(clockTime).toLocaleTimeString("en-GB"));
}, 1000);

// 12. Create a copy of today

const todayCopy = new Date(now.getTime());

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now

const newNow = new Date();
newNow.setFullYear(newNow.getFullYear() + 3);
newNow.setMonth(newNow.getMonth() + 2);
newNow.setDate(newNow.getDate() + 1);
console.log("Future date:", newNow);

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)

const timeZone = now.getTimezoneOffset();
console.log(`Time zone: UTC ${timeZone / 60}`);

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

console.log(
  "Time now in Sydney, Australia:",
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(new Date())
);

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.

function durationInMs(years, months, days, hours, mins, secs, ms) {
  const _yearsInMs = years * 365 * 24 * 60 * 60 * 1000;

  // for the months, to avoid dealing with different numbers of days
  // just calculate the fractional part of a full year.
  const _monthsInMs = (months / 12) * 365 * 24 * 60 * 60 * 1000;

  const _daysInMs = days * 24 * 60 * 60 * 1000;
  const _hoursInMs = hours * 60 * 60 * 1000;
  const _minsInMs = mins * 60 * 1000;
  const _secsInMs = secs * 1000;
  return (
    _yearsInMs +
    _monthsInMs +
    _daysInMs +
    _hoursInMs +
    _minsInMs +
    _secsInMs +
    ms
  );
}

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

function dateDiff(firstDate, secondDate) {
  // get the number of ms between the two dates
  const _ms = Math.abs(firstDate.getTime() - secondDate.getTime());

  // Code borrowed from:
  // https://stackoverflow.com/questions/38355157/is-there-a-method-to-convert-miliseconds-to-years-months-days-minutes-seconds-in
  let seconds = Math.floor(_ms / 1000),
    minutes = Math.floor(seconds / 60),
    hours = Math.floor(minutes / 60),
    days = Math.floor(hours / 24),
    months = Math.floor(days / 30),
    years = Math.floor(days / 365);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 30;
  months %= 12;

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

console.log(
  "Date Difference: ",
  dateDiff(new Date(2028, 9, 3, 12, 9, 23, 0), new Date())
);

/*****************************************************************
 * For date-fns Exercises follow link on page
 ******************************************************************/
