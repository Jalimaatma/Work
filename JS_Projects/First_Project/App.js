function updateTime() {
  // create a new Date object
  var now = new Date();

  // get the current hours, minutes, and seconds
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // convert to 12-hour format and add AM/PM suffix
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // get the time zone offset in minutes
  var timezoneOffset = now.getTimezoneOffset();
  var timezoneOffsetHours = Math.floor(Math.abs(timezoneOffset) / 60);
  var timezoneOffsetMinutes = Math.abs(timezoneOffset) % 60;
  var timezonePrefix = timezoneOffset <= 0 ? '+' : '-';
  var timezoneString = 'UTC ' + timezonePrefix + timezoneOffsetHours.toString().padStart(2, '0') + ':' + timezoneOffsetMinutes.toString().padStart(2, '0');

  // format the time as a string with the time zone
  var timeString = hours + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ' ' + ampm + ' ' + timezoneString;

  // display the time on the webpage
  console.log(timeString);
}

// update the time every second
setInterval(updateTime, 1000);




