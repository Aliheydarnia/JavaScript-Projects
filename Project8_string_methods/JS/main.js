// concat() Method
function string_method(){ 
    var my_1 = "This is ";
    var my_2 = "concatenating three ";
    var my_3 = "sentence.<br>";
    var all_sentence = my_1.concat(my_2,my_3);
    document.getElementById("demo").innerHTML = all_sentence;
}

// slice() Method
function slice_function(){
    var part_1 = "He is working every weekend."
    var part = part_1.slice(18,25);
    document.getElementById("slice").innerHTML = part;
}

//toUppercase() method
function my_string(){
    var x = "hello world";
    var upper = x.toUpperCase();
    document.getElementById("to").innerHTML = upper;
}

//search() method
function cart(){
    var A = "Sky is on the sky";
    var position = A.search("the");
    document.getElementById("search").innerHTML = position;
}

// to.string() method
function change(){
    var K = 20;
    document.getElementById("key").innerHTML = K.toString() ;
}

//toPrecision() method
function my_precision(){
    var A = 1234.765432 ;
    document.getElementById("gem").innerHTML =A.toPrecision(5);
}

//toFixed() method
function function_1(){
    var H = 34.1678;
    document.getElementById("for").innerHTML = H.toFixed(); // round the number 
}

//valueOf() method
function value_1(){
    var count=23;
    document.getElementById("val").innerHTML = count.valueOf();
}