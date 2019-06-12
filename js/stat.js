'use strict';

// var CLOUD_WIDTH = 420;
// var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var TEXT_FONT = 80;
var BAR_WIDTH = 40;
var HISTOGRAM_MAX_HEIGHT = 150;

// var renderCloud = function (ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };

var getMaxTime = function (times) {
  var maxTime = times[0];

  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = Math.round(times[i]);
    }
  }
  return maxTime;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.arc(CLOUD_X + 70, CLOUD_Y + 100, 100, 0, Math.PI * 2, true);

  ctx.arc(CLOUD_X + 270, CLOUD_Y + 100, 100, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 190, CLOUD_Y + 100, 40, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 60, CLOUD_Y + 200, 110, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 380, CLOUD_Y + 210, 90, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 270, CLOUD_Y + 200, 90, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 190, CLOUD_Y + 200, 100, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 380, CLOUD_Y + 100, 30, 0, Math.PI * 2, true);
  ctx.fill();
  // renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  // renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.beginPath();
  ctx.fillStyle = '#fff';
  ctx.arc(CLOUD_X + 60, CLOUD_Y + 90, 100, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 370, CLOUD_Y + 100, 30, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 260, CLOUD_Y + 90, 100, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 180, CLOUD_Y + 90, 100, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 50, CLOUD_Y + 190, 110, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 370, CLOUD_Y + 200, 90, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 260, CLOUD_Y + 190, 100, 0, Math.PI * 2, true);
  ctx.arc(CLOUD_X + 180, CLOUD_Y + 190, 100, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 200, 1)';
  ctx.fillText('Ура, Вы победили!', 200, 40);
  ctx.fillText('Список результатов:', 180, 70);
  var maxTime = getMaxTime(times);

  ctx.fillStyle = names[i] === Вы ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 25%)';
  ctx.fillText(names[i], CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_Y + TEXT_FONT + HISTOGRAM_MAX_HEIGHT + 3 * GAP);
  ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, -(HISTOGRAM_MAX_HEIGHT) * Math.round(times[i]) / maxTime + HISTOGRAM_MAX_HEIGHT + 2 * FONT_GAP - GAP);
  ctx.fillRect(CLOUD_X + (FONT_GAP + BAR_WIDTH) * i + FONT_GAP, CLOUD_Y + TEXT_FONT + GAP + HISTOGRAM_MAX_HEIGHT, BAR_WIDTH, -(HISTOGRAM_MAX_HEIGHT) * times[i] / maxTime);
