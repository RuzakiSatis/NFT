function upDateTime() {
    const block_time = document.querySelector(".block_time");
    const targetDate = new Date("2023-12-15T00:00:00");
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

  if (timeDifference > 0) {
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    block_time.innerHTML = `${hours}:${minutes}:${seconds}`;
  } else {
    block_time.innerHTML = "Time is up!";
  }
}

upDateTime();

setInterval(upDateTime, 1000);

/*---------------------------------------------two------------------------------------*/

function upDateTimeTwo() {
  const block_time_two = document.querySelector(".block_time_two");
  const targetDate = new Date("2023-11-11T00:00:00");
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

if (timeDifference > 0) {
  const hours = Math.floor((timeDifference % (3000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  block_time_two.innerHTML = `${hours}:${minutes}:${seconds}`;
} else {
  block_time_two.innerHTML = "Time is up!";
}
}

upDateTimeTwo();

setInterval(upDateTimeTwo, 1000);

/*--------------------------------------------------three---------------------------------------------*/

function upDateTimeThree() {
  const block_time_three = document.querySelector(".block_time_three");
  const targetDate = new Date("2023-11-11T00:00:00");
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

if (timeDifference > 0) {
  const hours = Math.floor((timeDifference % (2000 * 60 * 60 * 24)) / (2000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  block_time_three.innerHTML = `${hours}:${minutes}:${seconds}`;
} else {
  block_time_three.innerHTML = "Time is up!";
}
}

upDateTimeThree();

setInterval(upDateTimeThree, 1000);

/*------------------------------------------------four------------------------------------------------*/

function upDateTimeFour() {
  const block_time_four = document.querySelector(".block_time_four");
  const targetDate = new Date("2023-11-11T00:00:00");
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

if (timeDifference > 0) {
  const hours = Math.floor((timeDifference % (3000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  block_time_four.innerHTML = `${hours}:${minutes}:${seconds}`;
} else {
  block_time_four.innerHTML = "Time is up!";
}
}

upDateTimeFour();

setInterval(upDateTimeFour, 1000);

/*-----------------------------------------------five------------------------------------------*/

function upDateTimeFive() {
  const block_time_five = document.querySelector(".block_time_five");
  const targetDate = new Date("2023-11-11T00:00:00");
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

if (timeDifference > 0) {
  const hours = Math.floor((timeDifference % (3000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  block_time_five.innerHTML = `${hours}:${minutes}:${seconds}`;
} else {
  block_time_five.innerHTML = "Time is up!";
}
}

upDateTimeFive();

setInterval(upDateTimeFive, 1000);

/*------------------------------------------------six---------------------------------------------*/

function upDateTimeSix() {
  const block_time_six = document.querySelector(".block_time_six");
  const targetDate = new Date("2023-11-11T00:00:00");
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

if (timeDifference > 0) {
  const hours = Math.floor((timeDifference % (3000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  block_time_six.innerHTML = `${hours}:${minutes}:${seconds}`;
} else {
  block_time_six.innerHTML = "Time is up!";
}
}

upDateTimeSix();

setInterval(upDateTimeSix, 1000);

/*--------------------------------------------------------seven------------------------*/

function upDateTimeSeven() {
  const block_time_seven = document.querySelector(".block_time_seven");
  const targetDate = new Date("2023-11-11T00:00:00");
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

if (timeDifference > 0) {
  const hours = Math.floor((timeDifference % (3000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  block_time_seven.innerHTML = `${hours}:${minutes}:${seconds}`;
} else {
  block_time_seven.innerHTML = "Time is up!";
}
}

upDateTimeSeven();

setInterval(upDateTimeSeven, 1000);

/*-----------------------------------------------------------------eight-------------------------------------------*/

function upDateTimeEight() {
  const block_time_eight = document.querySelector(".block_time_eight");
  const targetDate = new Date("2023-11-11T00:00:00");
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

if (timeDifference > 0) {
  const hours = Math.floor((timeDifference % (3000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  block_time_eight.innerHTML = `${hours}:${minutes}:${seconds}`;
} else {
  block_time_eight.innerHTML = "Time is up!";
}
}

upDateTimeEight();

setInterval(upDateTimeEight, 1000);

/*------------------------------------------------------------nine-----------------------------------------------*/

function upDateTimeNine() {
  const block_time_nine = document.querySelector(".block_time_nine");
  const targetDate = new Date("2023-11-11T00:00:00");
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

if (timeDifference > 0) {
  const hours = Math.floor((timeDifference % (3000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  block_time_nine.innerHTML = `${hours}:${minutes}:${seconds}`;
} else {
  block_time_nine.innerHTML = "Time is up!";
}
}

upDateTimeNine();

setInterval(upDateTimeNine, 1000);