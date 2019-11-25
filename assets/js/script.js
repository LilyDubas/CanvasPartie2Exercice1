var c = document.getElementById( "icecream" );
var ctx = c.getContext("2d");

// le cornet
ctx.beginPath();
ctx.moveTo(350,300);
ctx.lineTo(300,150);
ctx.lineTo(400,150);
ctx.closePath();
ctx.fillStyle = "#D68241";
ctx.fill();
// la boule de glace
ctx.beginPath();
ctx.strokeStyle = "#8A0908";
ctx.fillStyle = "#8A0908";
ctx.moveTo(300,150);
ctx.bezierCurveTo(335,80,360,80,400,150);
ctx.closePath();
ctx.stroke();
ctx.fill();
