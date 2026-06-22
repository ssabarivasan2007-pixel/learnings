var sideNavbar = document.querySelector(".side-navbar");
var menu = document.getElementsByClassName("navbar-menu-toggle")[0];
var close=document.getElementsByClassName("fa-xmark")[0];
menu.addEventListener("click", function() {
    sideNavbar.style.left = "0";
});
close.addEventListener("click", function() {
    sideNavbar.style.left = "-100%";
})