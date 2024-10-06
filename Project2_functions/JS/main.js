function my_function() {
    var str ="This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}
function my_function_2() {
    var sentence="today weather is"; //creating two separate sentences to concatenate   
    sentence += " very cold";
    document.getElementById("Concatenate").innerHTML= sentence;
}