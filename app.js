
// Nav functionality
var navContent = document.querySelector(".nav-content");
var navLinks = document.querySelector("ul");

// what we do
navLinks.children[0].addEventListener("click",changeContent1);
function changeContent1() {
    navContent.children[0].innerHTML = `<a class="nav-link text-dark" href="#">what we do</a>`;
    navContent.children[1].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}

// what we are
navLinks.children[1].addEventListener("click",changeContent2);
function changeContent2() {
    navContent.children[0].innerHTML = `<a class="nav-link text-dark" href="#">what we are</a>`;
    navContent.children[1].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}

// careers
navLinks.children[2].addEventListener("click",changeContent3);
function changeContent3() {
    navContent.children[0].innerHTML = `<a class="nav-link text-dark" href="#">careers</a>`;
    navContent.children[1].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
// end nav functionality

// footer functionality
var footerLinks = document.querySelectorAll(".footer-links");
// what we do

footerLinks[0].addEventListener("click",changeContent4);
function changeContent4() {
    navContent.children[0].innerHTML = `<a class="nav-link text-dark" href="#">what we do</a>`;
    navContent.children[1].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
// what we are
footerLinks[1].addEventListener("click",changeContent5);
function changeContent5() {
    navContent.children[0].innerHTML = `<a class="nav-link text-dark" href="#">what we are</a>`;
    navContent.children[1].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
// careers
footerLinks[2].addEventListener("click",changeContent6);
function changeContent6() {
    navContent.children[0].innerHTML = `<a class="nav-link text-dark" href="#">careers</a>`;
    navContent.children[1].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
