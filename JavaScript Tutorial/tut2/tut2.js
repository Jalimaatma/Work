// var age = prompt("What is your age????");
// var drive = age>=18&age<=70  ? "You can vote":"You can not vote";
// document.getElementById("heading").innerHTML= drive;
 

const Time = ()=> {
    // create current time and date by the Date() function

    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var secondes = now.getSeconds();


    // hours= 0;
    // convert 24 hours to 12 hours formate
    var AMPM = hours >=12 ? "PM":"AM" ;
    hours = hours % 12 ;
    hours = hours? hours:12;


    // creat time and date string

    var todaysdate = date + "-" +month +"-" + year ;
    var currenttime = hours+ ":"+minutes+":"+ secondes +":"+ AMPM ;

    document.getElementById("time").innerText = currenttime;
    document.getElementById("date").innerText = todaysdate;

}

setInterval(Time, 1000);