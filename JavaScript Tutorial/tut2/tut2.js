// var age = prompt("What is your age????");
// var drive = age>=18&age<=70  ? "You can vote":"You can not vote";
// document.getElementById("heading").innerHTML= drive;
 

const Time = ()=> {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var secondes = now.getSeconds();

    var todaysdate = date + "-" +month +"-" + year ;
    var currenttime = hours+ ":"+minutes+":"+ secondes ;

    document.getElementById("time").innerHTML = currenttime;
    document.getElementById("date").innerHTML = todaysdate;

}

setInterval(Time, 1000);