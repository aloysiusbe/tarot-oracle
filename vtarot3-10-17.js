// JavaScript Document

$(document).ready(function(){

    
    $("button").click(function(){
     var c = Math.floor((Math.random() * 3 + 1)); 
      var b = Math.floor((Math.random() * 100 + 1));
      $("#imagebox").removeClass("upsidedown");
      $("#wordsbox").empty();
        $("#wordsbox").load ('L-' + a + '\/' + c + '.txt');
        if (b % 2 === 0) {
     $("#imagebox").addClass("upsidedown");
      $("#wordsbox").empty();
        $("#wordsbox").load ('D-' + a + '\/' + c + '.txt');
   $("#wordsbox").css("display", "none");
        } 
       $("#imagebox").empty();
    var a = Math.floor((Math.random() * 76 + 1));
      $("#imagebox").append('<img src="Images\/"+ a +".svg" >');
           $("#imagebox").css("display", "none");

         $("#imagebox").fadeIn(3000);
         $("#wordsbox").fadeIn(3000);
    });
});
