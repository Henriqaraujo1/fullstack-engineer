const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const menuLink = document.querySelectorAll(".menu-link");

hamburger.addEventListener("click", mobileMenu);
menuLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//Form

const fNome = document.getElementById("fname");
const sName = document.querySelector(".sname");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const message = document.querySelector(".message");
const buttonSend = document.querySelector(".button");

const sendEmail = () => {
    if(fNome.value != "") {
        alert(`Thanks sr(a) ${fNome.value} ${sName.value} your e-mail has been forwarded sucessfully`)
    }
}
// const sendEmail= () =>{
//     alert("Your e-mail was sent thanks, I will contact you soon.");
// }

buttonSend.addEventListener("click", sendEmail);

