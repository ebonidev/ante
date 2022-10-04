//Sidebar//

let icon1 = document.getElementById("icon1");
let menu1 = document.getElementById("menu1");
var showMenu1 = (flag) => {
  if (flag) {
    icon1.classList.toggle("rotate-180");
    menu1.classList.toggle("hidden");
  }
};
let icon2 = document.getElementById("icon2");

var showMenu2 = (flag) => {
  if (flag) {
    icon2.classList.toggle("rotate-180");
  }
};
let icon3 = document.getElementById("icon3");

var showMenu3 = (flag) => {
  if (flag) {
    icon3.classList.toggle("rotate-180");
  }
};

let Main = document.getElementById("Main");
let open = document.getElementById("open");
let close = document.getElementById("close");

var showNav = (flag) => {
  if (flag) {
    Main.classList.toggle("-translate-x-full");
    Main.classList.toggle("translate-x-0");
    open.classList.toggle("hidden");
    close.classList.toggle("hidden");
  }
};

//Remember Me

var rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}