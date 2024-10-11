function my_dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"White",
        Breed:"Ragdol",
        Age:3,
        Sound:"Meow",
    }
    delete Animal.Color ; // this kvp remove from our dictionary
    document.getElementById("Dictionary").innerHTML= Animal.Color;
}