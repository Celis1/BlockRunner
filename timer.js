//var startTime = new Date();
var someClock = document.getElementById("test");
var startTime = Date.now();
var diff;
//creating some kind of clock
someClock.innerHTML = "lol";
console.log(startTime);
setInterval(function(){
  console.log(Date.now());
  console.log("my var",startTime);
  diff = Date.now() - startTime;
  diff = Math.floor(diff /1000);
  someClock.innerHTML = diff +"s";
  console.log("diff",diff);
},1000);

//creating a score
// var someScore = document.getElementById("otherTest");
// someScore.innerHTML = 'some kinda trainign';
