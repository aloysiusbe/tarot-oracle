// JavaScript Document

$(document).ready(function(){
    
   var arr = [ "#DC143C", "#9400D3", "#000080", "#00CD00", "#FF4500" ];
    var b = Math.floor((Math.random() * 5 + 1));
    var c = arr[b];
     $("body").css("background-color", c);
    $("button").click(function(){
       $("#imagebox").empty();
    var a = Math.floor((Math.random() * 3 + 1));
      $("#imagebox").append('<img src="Images\/'+ a +'.svg" >');
           $("#imagebox").css("display", "none");
   $("#wordsbox").load (a + ".txt");
   $("#wordsbox").css("display", "none");
         $("#imagebox").fadeIn(3000);
         $("#wordsbox").fadeIn(3000);
    });
});
