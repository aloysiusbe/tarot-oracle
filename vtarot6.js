// JavaScript Document
	var a = Math.floor((Math.random() * 10) + 1); 
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
        alert("here");
    }, 10);
}
function showMore() {
document.getElementById('more' + a).style.display = "block";
	 
}
function cardFunction() {

	document.getElementById("cardImage").src =  "Images\/" +a+".svg";
	document.getElementById("p" + a).style.display='block';
	
}
