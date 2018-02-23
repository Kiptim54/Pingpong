//User-Interface Logic
$(document).ready(function(){
$("#choice").click(function(event){
var answer=parseInt($("#number").val());
var resultf=divisible(answer);
$("#output").text(resultf);
event.preventDefault();
});
});


//business Logic

var divisible=function(answer){
  for(i=1; i<=answer; i++){
    if(i%15===0){
      $("#output").append("<li>"+"pingpong"+"</li>");
    }
    }
  }
