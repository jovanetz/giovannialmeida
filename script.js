function realtimeClock() {
  var rtClock = new Date();

  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes(); 
  var seconds = rtClock.getSeconds();

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

console.log(hours, minutes, seconds);

  document.getElementById('clock').innerHTML =
  hours + ":" + minutes + ":" + seconds;
  var t = setTimeout(realtimeClock, 500);

  document.getElementById('clock').innerHTML =
  new Date ().toLocaleString("en-US",{timeZone: 'Brazil/East', timeStyle: 'medium', hourCycle: 'h23'});

}