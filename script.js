//there are three old ways to access element and update data
/*
window.addEventListener("load", () => {
  document.getElementsByTagName("p")[0].innerText = "hello, Omar";


window.onload = function () {
  document.getElementsByTagName("p")[0].innerText = "Let's play";
};

we can got to the body and write  ===> onload="function()"
*/

// hide all p

// let allps = document.getElementsByTagName("p");
// window.addEventListener("load", () => {
//   for (let i = 0; i < allps.length; i++) {
//     allps[i].style.display = "none";
//   }
//   for (let i = 0; i < allps.length; i++) {
//     allps[i].style.display = "block";
//   }
// });

// using jquery =====>   load event
// 1st shape
// $(document).ready(function () {
//   $("p").hide(3000).show(2000);
// });

//2nd shape:
// $(function () {
//   $("p").hide(3000).show(2000);
// });

//===================================>>>>>  add , remove and toggle class <<<<======================================//
