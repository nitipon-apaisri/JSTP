let arrName = [];

function sendData() {
  let inName = document.getElementById("nameIn").value;
  arrName.push(inName);
  console.log(arrName);
  localStorage.setItem("name", JSON.stringify(arrName));
  console.log(localStorage);
}
let dataName = JSON.parse(localStorage.getItem("name"));
document.getElementById("display-info-name").innerHTML = dataName;

function dropValue() {
  let localKeys = ["name"];
  if (localStorage !== "undefined" || 0) {
    localKeys.forEach((k) => localStorage.removeItem(k));
  }
}
