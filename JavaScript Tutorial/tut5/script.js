// var your_fun = () => {
//     var a = document.getElementById("Id").value;
//     // console.log(a>=10 && a<=18 ? "your age is between 10 and 18": "your age is not between 10 and 18");

//     for (let i = 1; i <= a; i++) {
//         document.write("This is a number " + i + "<br>");

//     }
// }



// var your_fun = () => {
//     var a = document.getElementById("Id").value;

//     let i=0;
//     while (i<a) {
//         document.write(i+"<br>");
//         i++;
//     }
// }
var your_fun = () => {
    var a = document.getElementById("Id").value;

    let i = 0;
    do {
        document.write(i + "<br>");
        i++;
    } while (i < a);
}