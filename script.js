var Add = document.getElementById("add")
var Task = document.getElementById("task")
var taskList = document.getElementById("taskList")

Add.onclick = function input_validation(){
    // console.log(Task.value)
    
    if (Task.value === ""){
        alert("You must write something!")
    }
    else{
        var taskText = Task.value;
        var li = document.createElement("li");
        li.textContent = taskText;

        if (taskList.children.length % 2 === 0) {
            li.style.backgroundColor = "#eeeeee"; 
        } else {
            li.style.backgroundColor = "#dddddd"; 
        }

        taskList.appendChild(li);
        Task.value = "";
    }
} 