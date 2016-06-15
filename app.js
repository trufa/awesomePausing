//Credit:
//http://stackoverflow.com/a/1760283/463065

var isActive = true;
var isPlaying = false;
window.onfocus = function () { 
  isActive = true; 
}; 

window.onblur = function () { 
  isActive = false; 
}; 

player = document.getElementsByTagName('video')[0];
setInterval(function () {
  console.log(isActive, isPlaying); 
  if (window.isActive) {
    if (!isPlaying){
      player.play();
      isPlaying = true;
    }
  } else {
    if (isPlaying){
      player.pause();
      isPlaying = false;
    }
  } 
}, 1000);
