// const now = "Todays Date"
// document.getElementById("Time").innerText = now;

// function clock() {
//     const Tim = Math.floor((new Date())/1000);
//     const date = Math.floor(Tim/3600/24);
//     const hour = Math.floor((Tim/3600)%24)
//     console.log(Tim, date, hour)




// }

// clock()

// function updateTime() {
//     const currentTime = new Date();
//     const hours = currentTime.getUTCHours() + 5.5; // Add 5.5 hours to UTC for Indian Standard Time
//     const minutes = currentTime.getUTCMinutes();
//     const seconds = currentTime.getUTCSeconds();
//     const timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
//     document.getElementById('Time').innerText = timeString;
//   }
  
//   setInterval(updateTime, 1000); // Update the clock every second
  
//   updateTime()

function updateTime() {
    var today = new Date();
    var options = {timeZone: 'Asia/Kolkata', hour12: false};
    var time = today.toLocaleTimeString('en-US', options);
    document.getElementById('Time').innerHTML = time;
  }
  
  setInterval(updateTime, 1000);

  updateTime();