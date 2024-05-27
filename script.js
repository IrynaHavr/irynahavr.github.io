let today = new Date();

console.log(today);

let inputElementDay = document.getElementById("inputDay");

inputDay.addEventListener("change", function () {
  console.log();
  let inputDay = parseInt(inputElementDay.value);
  let errorDay = document.getElementById("dayError");

  if (inputDay > 31 || inputDay < 0 || isNaN(inputDay)) {
    errorDay.textContent = "Must be a valid day";
    inputElementDay.style.border = "1px #ff5959 solid";
    inputElementDay.previousElementSibling.style.color = '#ff5959';
  } else {
    errorDay.style.display = "none";
    inputElementDay.style.border = "1px  solid #dcdcdc";
    inputElementDay.previousElementSibling.style.color = '#716f6f'; 
  }

  console.log(inputDay);
  console.log();
});
let inputElementMonth = document.getElementById("inputMonth");

inputMonth.addEventListener("change", function () {
  let inputMonth = parseInt(inputElementMonth.value);
  let errorMonth = document.getElementById("monthError");

  if (inputMonth > 12 || inputMonth < 0 || isNaN(inputMonth)) {
    errorMonth.textContent = "Must be a valid month";
    inputElementMonth.style.border = "1px #ff5959 solid";
    inputElementMonth.previousElementSibling.style.color = '#ff5959'; 

  } else {
    errorMonth.style.display = "none";
    inputElementMonth.style.border = "1px  solid #dcdcdc";
    inputElementMonth.previousElementSibling.style.color = '#716f6f'; 
  }

  console.log(inputMonth);
});

let inputElementYear = document.getElementById("inputYear");

inputYear.addEventListener("change", function () {
  let inputYear = parseInt(inputElementYear.value);
  let errorYear = document.getElementById("yearError");

  if (inputYear > 2024 ||  isNaN(inputYear)) {
    errorYear.textContent = "Must be in the past";
    inputElementYear.style.border = "1px #ff5959 solid";
    inputElementYear.previousElementSibling.style.color = '#ff5959'; 
  } else  if (inputYear < 1900){
    errorYear.textContent = "You can't be such old ;)";
    inputElementYear.style.border = "1px #ff5959 solid";
    inputElementYear.previousElementSibling.style.color = '#ff5959'; 
  }  else {
    errorYear.style.display = "none";
    inputElementYear.style.border = "1px  solid #dcdcdc";
    inputElementYear.previousElementSibling.style.color = '#716f6f'; 
  }

  console.log(inputYear);
});
let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let birthday = new Date(
    inputElementYear.value,
    inputElementMonth.value - 1,
    inputElementDay.value,
  );

  let year = today.getFullYear() - birthday.getFullYear();
  let months = today.getMonth() - birthday.getMonth();
  let days = today.getDate() - birthday.getDate();

  if (months < 0) {
    year--;
    months += 12;
  }

  if (days < 0) {
    months--;

    let prevMonthLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0,
    ).getDate();
    days += prevMonthLastDay;
  }

  if(!isValidDateFormat(inputElementDay.value, inputElementMonth.value, inputElementYear.value)) {
    alert (" Please enter a valid date")
  }

  let rYear = document.getElementById("rYear");
  rYear.textContent = "";
  rYear.textContent = year;

  let rDay = document.getElementById("rDay");
  rDay.textContent = "";
  rDay.textContent = days;

  let rMonth = document.getElementById("rMonth");
  rMonth.textContent = "";
  rMonth.textContent = months;
});
function isValidDateFormat(day, month, year) {
  // Перевірка на реальність дати
  let inputDate = new Date(year, month - 1, day); // Місяці у JavaScript починаються з 0

  return (
    inputDate.getFullYear() === parseInt(year, 10) &&
    inputDate.getMonth() === parseInt(month, 10) - 1 &&
    inputDate.getDate() === parseInt(day, 10)
  );
  }
  let per = isValidDateFormat(1213, 02, 31);
  console.log(per);
