function Call_Loop(){
    var A = "" ;
    var X = 10 ;
    while ( X > 5) {
        A += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = A;
}

// Length Property 
var Demo = "Good morning!";
var length = Demo.length;
document.getElementById("length").innerHTML = length;



//For loop 
var instruments = ["Piano", "Guitar", "Violin"];
var content = "";
var C ;
function for_Loop(){
    for (C=0; C< instruments.length; C++){
        content += instruments[C] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}


// Array function 
function array_Function(){
    var UK_weather = [];
    UK_weather[0]= "cloudy";
    UK_weather[1]= "sunny";
    UK_weather[2]= "windy";
    UK_weather[3]= "snowy";
    document.getElementById("Array").innerHTML = "Today weather is " + UK_weather[2] + "."+ "<br>" + "Tomorrow would be " + UK_weather[1]+ ".";
}


//Const Keyword
const video_game = {type:"ps5" , name:"Resident evil"};
function constant_function(){
    const video_game = {type:"ps5" , name:"Resident evil"};
     video_game.genre = "adventure";
     video_game.name = "far cry";

document.getElementById("constant").innerHTML = video_game.name + " is my favorite " + video_game.type + " game in " + video_game.year + " beside " + video_game.name ;}


// let keyword
function mobile(){
    let mobile = {
    make : "iPhone ",
    color: "rose gold",
    model: "15 pro max ",

};
document.getElementById("let").innerHTML = " I have an " + mobile.make + mobile.model + mobile.color + "." ;}


// object assignment
let tv = {
    model:"sony ",
    year:"2020",
    panel:"LED ",
    size:"50 inch ",
    show: function(){
        return "I bought a tv " + this.size +  this.model + this.panel + " in " + this.year + ".";
    }  
};
document.getElementById("obj").innerHTML = tv.show();



