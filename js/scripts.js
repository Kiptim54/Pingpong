//User-Interface Logic
$(document).ready(function(){
$("#choice").click(function(){
var answer=parseInt($("#number").val());
var calculate=divisible(answer);

});
});
//business Logic
var divisible=function(answer){
  for(i=1; i<=answer; i++){
    if(i%3===0){
      console.log("ping");
    }else if (i%5===0){
      console.log("pong");
    } else if(i%15===0){
      console.log("pingpong");
    }else{
      console.log(i);
    }
    }
  }
