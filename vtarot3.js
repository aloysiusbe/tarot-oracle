// JavaScript Document
function cardFunction() {
	var a = Math.floor((Math.random() * 4));
	document.getElementById("cardImage").src =  "Images\/" + a+".jpg";
	switch (a) {
    case 1:
        text = "Oracle = Cieze the day.  Be aware your physical and spiritual needs. Be yourself. Enjoy being. Ask yourself what you truly want";
        break;
    case 2:
        text = "Oracle = Live wisely, realize that nothing is permanent. Ground yourself in your inner sanctum. Incorporate spiritual practices (yoga, reading, praying, meditating). Follow your clear head and listen to your intuition";
 case 3:
        text = "3";
		 case 4:
        text = "4";
        break;
    default:
        text = "Looking forward to the Weekend";
		document.getElementById("p1").innerHTML = text;
} 
 }
	



