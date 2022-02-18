import ConfettiGenerator from "./javascript/confetti.js";



//window.location.assign("welcolm.html");

$("#continue").click(function () {
  window.location.assign("welcolm.html");

})


var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();