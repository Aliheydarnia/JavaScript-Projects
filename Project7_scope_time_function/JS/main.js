// global variable
var X = "person"
function myfunction_1(){
    document.write( " This is a beautiful " + X + "<br>");
}
function myfunction_2() {
    document.write( "He is a good " + X + "<br>");
}
myfunction_1();
myfunction_2();


// local variable
function adding(){
    var num = 10;
    document.write( 20 + num + "<br>");
}

function adding_1(){
    document.write(100 + num );
}
adding();
adding_1();


// using console.log() method
function adding(){
    var num = 10;
    console.log( 20 + num + "<br>");
}

function adding_1(){
    console.log(100 + num );
}
adding();
adding_1();


// if statement that using new.Date().getHours()
function Method_function(){
    if (new Date().getHours() < 13){
        document.getElementById("Method").innerHTML = X ;
    }
}


// my own if statement
   if (10 < 20){
    document.write("today is cold")
   }

   // if statement and else statement
   function grade_function(){
    Grade = document.getElementById("Grade").value;
    if ( Grade >= 8){
        grade = " you are A level.";
    }
    else {
        grade= "You are not A level";
    }
    document.getElementById("your_grade").innerHTML = grade ;

   }

   // Else if statement 
   function time_function(){
    var Time = new Date().getHours();
    var Replay;
    if (Time<12 == Time>0){
        Replay = " IT is morning time";
    }
    else if(Time>12 == Time<18){
        Replay = "It is afternoon.";

    }
    else {
        Replay= "It is evening time.";
    }
    document.getElementById("time_of_day").innerHTML = Replay;
   }