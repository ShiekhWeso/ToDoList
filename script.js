var Add = document.getElementById("add")
var Task = document.getElementById("task")

Add.onclick = function input_validation (){
    // console.log(Task.value)
    if (Task.value === ""){
        alert("You must write something!")
    }
}