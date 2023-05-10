let canvas;
let ctx;

let circleR = 0;
let incrementor = 5;

/*
This time instead of using this equation for speed.. we will
just add ++ to move them .   

Adding ++ is the equivalent to saying:

incrementor = incrementor + 1

Adding -- is the equivalent to saying

incrmentor = incrementor -1

*/

let decrementor = 8;

window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 10);
};

function drawBoxxy() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = "blue";
  ctx.fillRect(incrementor++, decrementor++, 300, 400);
  ctx.fillStyle = "green";
  ctx.fillRect(decrementor--, decrementor--, 300, 500);
  ctx.fillStyle = "red";
  ctx.fillRect(100 + incrementor++, incrementor++, incrementor++, 90);
  ctx.fillStyle = "pink";
  ctx.fillRect(50,incrementor--, incrementor++, incrementor--);
}
