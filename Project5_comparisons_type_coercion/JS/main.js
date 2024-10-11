
document.write(typeof "Hello"); // display string data by utilizing typeof method
document.write("<br>");

document.write(typeof 10); // display number data by utilizing typeof method
document.write("<br>");

document.write("10"+5);// combining a string and number data
document.write("<br>");

document.write(3E500);// infinity 
document.write("<br>");

document.write(-3E500);// negative infinity
document.write("<br>");

document.write(15 > 13); //
document.write("<br>");

document.write(12 <= 10);
document.write("<br>");

console.log(2+2);
document.write("<br>");

console.log(5>=8);
document.write("<br>");

document.write( 15==15);
document.write("<br>");

document.write(10 == 9);
document.write("<br>");

document.write( 25===25);
document.write("<br>");

document.write ( 10==="Ali");
document.write("<br>");

document.write(25==="25");
document.write("<br>");

document.write(18===17);
document.write("<br>");

document.write(25>20 && 3<10);
document.write("<br>");

document.write( 30 > 20 && 25 > 45);
document.write("<br>");

document.write( 20 > 10 || 10 < 5);
document.write("<br>");

document.write( 3 < 2 || 2> 5);
document.write("<br>");

function NOT_function(){
    document.getElementById("NOT").innerHTML = !(10 > 15);
}