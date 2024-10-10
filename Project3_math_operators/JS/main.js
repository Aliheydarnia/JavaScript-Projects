function additional() {
    var add = 5+2 ; //additional
    document.getElementById("add").innerHTML = "5+2 = " + add ;
}

function subtraction() {
    var sub= 4-2 ; //subtraction
    document.getElementById("sub").innerHTML = "4-2 = " + sub ;
}

function multiplication() {
    var multi = 7*8 ; //multiplication
    document.getElementById("multi").innerHTML = "7 * 8 = " + multi;

}

function modulus(){
    var modulus= 80 % 5; //modulus
    document.getElementById("modulus").innerHTML =" 80 % 5 = " + modulus ;
}

function increment(){
    var value = document.getElementById("increment").innerHTML ;
    value++;
    document.getElementById("increment").innerHTML = value;

}

function decrement(){
    var value= document.getElementById("decrement").innerHTML ;
    value --;
    document.getElementById("decrement").innerHTML = value ;
}

function random() {
    document.getElementById("ran").innerHTML = Math.random() * 5 ;
}