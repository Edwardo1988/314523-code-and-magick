window.renderStatistics = function(ctx, names, times) {

 // var names = ['Вы', 'Катя', 'Петя', 'Оля'];
 // var times = [3590.5, 12092, 3700, 5978];

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);



var getMaxElement = function(array){
  var max = 0;
  var maxIndex = 0;
  for (var i = 0; i < array.length; i++){
  var time = array[i];
  if (time > max){
    max = time;
    }
  }
  return max;
}


var histogramMaxElementY = getMaxElement(times);
var histogramHeight = 150;
var columnWidth = 40;
var columnInterval = 50;
var myColour = 'rgba(255, 0, 0, 1)';
var textColour = 'rgba(0, 0, 0, 1)';
var histogramX = 120;
var histogramY = 250;

for (var i = 0; i <= times.length - 1; i++){
  ctx.globalAlpha = Math.random();
  var otherPlayersColour = 'rgb(0, 0, 255)';
  times[i] = Math.round(times[i]);
  if (names[i] == 'Вы'){
    ctx.globalAlpha = 1;
    ctx.fillStyle = myColour;}
  else {ctx.fillStyle = otherPlayersColour;}
  ctx.fillRect(histogramX + columnWidth * i + columnInterval * i, histogramY, columnWidth, times[i] * histogramHeight / - histogramMaxElementY);
  ctx.fillStyle = textColour;
  ctx.globalAlpha = 1;
  ctx.fillText(names[i], histogramX + columnWidth * i + columnInterval * i, histogramY + 20);
  ctx.fillText(times[i], histogramX + columnWidth * i + columnInterval * i, - (times[i] * histogramHeight / histogramMaxElementY) + 240);
  }
}
