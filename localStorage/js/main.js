let arrName = [];
let arrEmail = [];
let arrCountry = [];

function sendData() {
  let inName = document.getElementById("nameIn").value;
  let inEmail = document.getElementById("email").value;
  let inCountry = document.getElementById("country").value;
  //push to array
  arrName.push(inName);
  arrEmail.push(inEmail);
  arrCountry.push(inCountry);
  //remove duplicate value
  let uniqeEmail = [...new Set(arrEmail)];
  //store data in local storage
  localStorage.setItem("name", JSON.stringify(arrName));
  localStorage.setItem("email", JSON.stringify(uniqeEmail));
  localStorage.setItem("country", JSON.stringify(arrCountry));
  console.log(localStorage.name);
  console.log(localStorage.email);
  console.log(localStorage.country);
}
let dataName = JSON.parse(localStorage.getItem("name"));
document.getElementById("display-info-name").innerHTML = dataName;
let dataEmail = JSON.parse(localStorage.getItem("email"));
document.getElementById("display-info-email").innerHTML = dataEmail;

function dropValue() {
  let localKeys = ["name", "email", "country"];
  if (localStorage !== "undefined" || 0) {
    localKeys.forEach((k) => localStorage.removeItem(k));
  }
}
