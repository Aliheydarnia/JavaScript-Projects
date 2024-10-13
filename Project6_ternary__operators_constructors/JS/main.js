// utilizing a ternary operation 
function vote_function(){
    var Age, can_vote;
    Age = document.getElementById("Age").value ;
    can_vote = (Age<18) ? "you are not old enough to vote.":"you can vote.";
    document.getElementById("Vote").innerHTML = can_vote ;

}

// construct function that uses "new" and "this" keywords.
function Person(Last,Age,Sex){
    this.Person_Last= Last;
    this.Person_Age= Age ;
    this.Person_Sex = Sex;
}
var Ali = new Person("Hey",37,"Male");
var Eli = new Person("Sub",65,"Female");
function New_Keyword(){
    document.getElementById("New_and_This").innerHTML = " His surname  is "  + Ali.Person_Last + " . He is " + Ali.Person_Age + " and " + Ali.Person_Sex;
}


// nested function
function Fish(){
    document.getElementById("Nested_Function").innerHTML = Shark ();
    function Shark(){
        var age= 15;
        function minus_one() {
            age -= 1;
        }
        minus_one();
        return age;
    }

}
