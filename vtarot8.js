// JavaScript Document

$(document).ready(function(){

    
    $("button").click(function(){
      var b = Math.floor((Math.random() * 100 + 1));
      $("#imagebox").removeClass("upsidedown");
      $("#wordsbox").empty();
        if (b % 2 === 0) {
     $("#imagebox").addClass("upsidedown");
        } 
       $("#imagebox").empty();
    var a = Math.floor((Math.random() * 76 + 1));
      $("#imagebox").append('<img src="Images\/'+ a +'.svg" >');
           $("#imagebox").css("display", "none");
   $("#wordsbox").load (a + ".txt");
   $("#wordsbox").css("display", "none");
         $("#imagebox").fadeIn(3000);
         $("#wordsbox").fadeIn(3000);
    });
});
