var productContainer = document.getElementById("product");
var search=document.getElementById("search");
var productlist=productContainer.querySelectorAll("div");

search.addEventListener("keyup",function(event){
    var enteredValue=event.target.value.toUpperCase();
    for(count=0;count<productlist.length;count++)
        {
        var productName=productlist[count].querySelector("p").innerText.toUpperCase();
        if(productName.indexOf(enteredValue)<0){
            productlist[count].style.display="none";
        }
        else{ 
           productlist[count].style.display="block";
        }
    }
});
var sideNavbar = document.querySelector(".side-navbar");
var menu = document.getElementsByClassName("navbar-menu-toggle")[0];
var close=document.getElementsByClassName("fa-xmark")[0];
menu.addEventListener("click", function() {
    sideNavbar.style.left = "0";
});
close.addEventListener("click", function() {
    sideNavbar.style.left = "-100%";
})
