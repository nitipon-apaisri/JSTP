let arrName = [];
let arrUsername = [];
let arrEmail = [];
let arrPassword = [];

function register() {
    let inputName = document.getElementById('name').value;
    let inputUsername = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    let inputEmail = document.getElementById('email').value;
    //store data in array
    arrName.push(inputName);
    arrUsername.push(inputUsername);
    arrEmail.push(inputEmail);
    arrPassword.push(inputPassword);
    //store on local storage
    localStorage.setItem("name", JSON.stringify(arrName));
    localStorage.setItem("username", JSON.stringify(arrUsername));
    localStorage.setItem("email", JSON.stringify(arrEmail));
    localStorage.setItem("password", JSON.stringify(arrPassword));
    console.log(localStorage);
};
function check() {
    let inUname = document.getElementById('inUsername').value;
    let inPass = document.getElementById('inPassword').value;
    if(inUname == 0 || inPass == 0) {
        console.log('something went wrong! Please check username or password! ');
    } else if (inUname == arrUsername && inPass == arrPassword) {
        console.log('logged');
    } else {
        console.log('something went wrong! Please check username or password! ');
    }
}

function removeValue() {
    let localKeys = ['name', 'username', 'email', 'password'];
  if (localStorage !== "undefined" || 0) {
    localKeys.forEach(k => localStorage.removeItem(k))
  }
}