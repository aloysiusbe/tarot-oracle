// JavaScript Document
function cardFunction() {
	var a = Math.floor((Math.random() * 4));
	var b = Math.floor((Math.random() * 4));
	document.getElementById("cardImage").src = a+".jpg";
	if (b > 2){
document.getElementById("cardImage").className += "flip-vertical";
if (a = 1 && b > 2) {
	document.getElementById("p1").innerHTML = "New text!";
} 
else if (a = 1 && b < 2) {
	document.getElementById("p1").innerHTML = "New new text!";
} 

 }
	
}


