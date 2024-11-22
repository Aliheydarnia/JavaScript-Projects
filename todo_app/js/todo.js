/* this function gets the task from input*/
function get_todos(){
    /*this creates an array of task that are inputed*/
    var todos= new Array;
    /* this pulls the task that was saved in the web browser memory */
    var todos_str = localStorage.getItem("todo");
    if (todos_str !== null){
        todos = JSON.parse(todos_str);
    }
    return todos;

}

/* this function adds inputed task to the get_todos function array */
function add(){
    var task = document.getElementById("task").value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem("todo",JSON.stringify(todos));
    document.getElementById("task").value = " ";
    show();
    return false;
}

/*this function keeps the task permanently displayed on the screen */
function show(){
    var todos = get_todos();
    var html = "<ul>";
    for (var i=0; i <todos.length; i++){
        html += "<li>" + todos[i]+ "<button class='remove' id='" + i + "'>x</button><li>";

    };
    html += "</ul>";
    document.getElementById("todos").innerHTML = html;
}

/* this displays the inputed task when  "Add Item" button is clicked*/
document.getElementById("add").addEventListener("click",add);
show(); 

/* this function will remove a todo item */
function remove(){
    var id = this.getAttribute("id");
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem("todo",JSON.stringify(todos));
    show();
    return false;
}

/* this tells browser how to display todo array after an item has been deleted */
var buttons = document.getElementsByClassName("remove");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",remove);

};