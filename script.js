'use strict';
function calculateResult() {
  const plantType = parseFloat(document.getElementById('plantType').value);
  const location = parseFloat(document.getElementById('location').value);
  const interval = parseFloat(document.getElementById('interval').value);
  const areaSize = parseFloat(document.getElementById('areaSize').value);
  const dripType = parseFloat(document.getElementById('dripType').value);
  const dripFlow = parseFloat(document.getElementById('dripFlow').value);
  

  const waterPortion = plantType * location * interval * (areaSize / 1000);
  const dripPresCount = areaSize / (dripType ** 2);
  const drippersFlow = (dripPresCount * dripFlow) / 1000 ;
  const timeInHours = waterPortion / drippersFlow;

  // Convert time to hours, minutes, and seconds
  const hours = Math.floor(timeInHours);
  const minutes = Math.floor((timeInHours - hours) * 60);
  const seconds = Math.floor(((timeInHours - hours) * 60 - minutes) * 60);

  document.getElementById('totalFlow').innerText = waterPortion.toFixed(2);
  document.getElementById('resultDrippers').innerText = dripPresCount.toFixed(2);
  document.getElementById('resultDrippersFlow').innerText = drippersFlow.toFixed(2);
  document.getElementById('calculateTimeResult').innerText = `${hours}h ${minutes}m ${seconds}s`;
}
