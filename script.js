/* Declare variables below to save the different sections (divs) of your story*/
let option1= document.querySelector(".option-one");
let option1screen= document.querySelector(".option-one-screen");

let option2= document.querySelector(".option-two");
let option2screen= document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");

option1.onclick=function(){
	option1screen.style.display = "block";
	optionOneEnd.style.display = "block";
};

option2.onclick=function(){
	option2screen.style.display = "block";
	optionTwoEnd.style.display = "block";
};









