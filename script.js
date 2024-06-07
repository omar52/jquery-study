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

// 2nd shape:
// $(function () {
//   $("p").hide(3000).show(2000);
// });

//===================================>>>>>  add , remove and toggle class <<<<======================================//

//   1-register event load
//   2-register mouseover event
//   3-add class
//   4-register mouseout event
//   5-remove class
//   6- $(this)  ====>  li.currenttarget
//   7- we can replace thr 2 events by hover((fn1),(fn2))
//   8- the best practise is to use toogle class

// $(() => {
//     $("li").mouseover(function () {
//       $(this).addClass("hover");
//     });
//     $("li").mouseout(function () {
//       $(this).removeClass("hover");
//     });

//     $("li").hover(
//       function () {
//         // over
//         $(this).addClass("hover");
//       },
//       function () {
//         // out
//         $(this).removeClass("hover");
//       }
//     );

//   $("li").hover(function () {
//     // over
//     $(this).toggleClass("hover");
//   });
// });

//===================================>>>>>  text, html and val methods <<<<======================================//
// one function many uses
//  1- html() ====> setter & getter    ====> in case of setting it means that the code will be read as html code and will be interpreted
//  2- text() ====> setter & getter    ====> in case of setting it means that the code will be read as text and will not be interpreted
//  3- val()  ====> setter & getter    =================> works on an input of the form  (any form element)
//  4- css()  ====> setter & getter    ====> css("prop","value")  it accepts the chain or can put all properties in letral object then put it as argu in the css fun
//  5- width()====> setter & getter
//  6- height()====> setter & getter

// $(() => {
//   console.log($("div").text());
//   console.log($("div").html());
//   $("button").click(function () {
//     $("div").html("<h2>heading</h2>");
//   });
// });

//===================================>>>>> [attributes] attr and prop methods <<<<======================================//
// 1- attr() ... get the values on the level of html (it must be existed in the html file   ) so it is not beiing used
// 2- prop() ... can track all attributes whether existed in html or not ====? return for numeric attributes (integer value(number))  we all always work with prop()

//===================================>>>>> [filter and each methods] <<<<======================================//
// filter() ===> take a function and return anew arrat of new values
// each()   ===> the same as foreacj loop in js
//====>note<==== there is no usage for arrow function

// $(document).ready(() => {
//   $("div")
//     .filter(function () {
//       return $(this).width() > 120;
//     })
//     .each(function () {
//       $(this).css("background-color", "red");
//     });
// });

//===================================>>>>> [Effects] <<<<======================================//
// 1- hide(time in ms)  ---- hide the element in a certain duration
// 2- show(time in ms)  ---- show the element in a certain duration
// 3- slideUP(time in ms)  ---- slid the element up in a certain duration
// 4- slideDown(time in ms)  ---- slid the element down in a certain duration
// 5- slideToggle(time in ms)  ---- toggling the sliding of cetain  element in a certain duration
// 6- fadein(time in ms)  ---- fade the element in a certain duration
// 7- fadeOut(time in ms)  ---- fade the element out a certain duration
// for all above effect methods == >  effect(speed,easing,fn)=== speed(fast,slow,time in mms) ; easing(ease in , ease out , ease in-out)  ; fn to be called after effect is done
// $(function () {
//   //hide
//   $("input:eq(0)").click(function () {
//     $("div").hide(2000);
//   });
//   //show
//   $("input:eq(1)").click(function () {
//     $("div").show(1000);
//   });
//   //slide up
//   $("input:eq(2)").click(function () {
//     $("div").slideUp(1000);
//   });
//   //slide down
//   $("input:eq(3)").click(function () {
//     $("div").slideDown(1000);
//   });
//   //slide toggle
//   $("input:eq(4)").click(function () {
//     $("div").slideToggle();
//   });
//   //fadeIn
//   $("input:eq(5)").click(function () {
//     $("div").fadeIn(1000);
//   });
//   //fadeOut
//   $("input:eq(6)").click(function () {
//     $("div").fadeOut(1000);
//   });
//   //fadeToggle
//   $("input:eq(7)").click(function () {
//     $("div").fadeToggle(1000, "", function () {
//       alert("hello");
//     });
//   });
// });

//===================================>>>>> [Effects] <<<<======================================//
//position must be absolute to be translated
//   =====> syntax $(selected).animate("{style}", "speed","easing", "callback");
// $(function () {
//   $("input:first").click(function () {
//     console.log("clicked");
//     $("div").animate({
//       left: "+=20px",
//       height: "+=20px",
//       width: "+=20px",
//     });
//   });
//   $("input:last").click(function () {
//     console.log("clicked");
//     $("div").animate({
//       left: "-=20px",
//       height: "-=20px",
//       width: "-=20px",
//     });
//   });
// });

//===================================>>>>> [DOM Traversing] <<<<======================================//
//1- childern() -----> return all main children
//2- is()       -----> ask for type of the current element and return boolean value
//3- next()     -----> return the next direct element in the same level
//4- nextAll()  -----> return the all next direct elements in array form in the same level
//5- prev()     -----> return the previous direct element in the same level
//6- prevAll()  -----> return the all previous direct elements in array form in the same level
//7- parent()   -----> return the direct parent of the current element
//8- parents()  -----> return array of the wrapping parents of the current element
//9- childern("certain element")  ----> return all children or all children of certain type

//===================================>>>>> [DOM Manipulation] <<<<======================================//
// It work in three place
//1- inside the ELement(between the element tags)

//1.1-append()      ====> add content to the last  ------------->>> $("li:first").append("<b>hello</b>")
//1.2-appendTo()    ====> the same but its syntax is  ------>>>   $("element").appendTo($("someelement")) in the last
//1.3-prepend()     ====> add content to the first ------------->>> $("li:first").prepend("<b>hello</b>")
//1.4-prependTo()   ====> the same but its syntax is  ------>>>   $("element").appendTo($("someelement")) in the first

//2- outside the ELement

//2.1 - after()                    ====> add element after another element  --------->>>  $("li:first").after("<b>hello</b>")
//2.2 - before()                   ====> add element before another element --------->>>  $("li:first").before("<b>hello</b>")
//2.3 - insertAfter()              ====> add element after another element  --------->>>  ("<b>hello</b>").insertAfter($("li:first"))
//2.4 - insertBefore()             ====> add element before another element  --------->>>  ("<b>hello</b>").insertBefore($("li:first"))

//3- around the ELement

//3.1 wrap()      ====> wrap the whole element by another element   ---->   $("li:first").wrap("<p></p>")======>  <p><li>li-content</li></p>
//3.2 warpInner() ====> wrap the inner text of the element by another element ---->   $("li:first").wrapInner("<p></p>") ======>  <li><p>li-content</p></li>li
//3.3 wrapAll()   ====> wrap all element by some element ----->$("li:first").wrap("<p></p>")======>  <p><li>li1-content</li> <li>li2-content</li> <li>li3-content</li> </p>

//===================================>>>>> [DOM Manipulation --- clearing element] <<<<======================================//
//1- empty() ,, delete the content of the element
//2- remove() ,, delete the entire element  and return the element removed and in recover does not recover the events
//3- detach() ,, delete the entire element  and return the element removed and in recover also recover the events   (it is preferable)
