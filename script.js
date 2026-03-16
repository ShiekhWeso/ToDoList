var Add = document.getElementById("add")
var Task = document.getElementById("task")
var taskList = document.getElementById("taskList")

Add.onclick = function() {
    // console.log(Task.value)

    if (Task.value === ""){
        alert("You must write something!")
    }
    else{
        var taskText = Task.value;
        var li = document.createElement("li");
        var span = document.createElement("span");

        li.appendChild(document.createTextNode(taskText));
        span.textContent = "×";
        span.classList.add("end-span");

        span.onclick = function() {
            this.parentElement.remove();
        };

        li.appendChild(span);

        if (taskList.children.length % 2 === 0) {
            li.classList.add("even");
        } else {
            li.classList.add("odd");
        }

        taskList.appendChild(li);
        Task.value = "";
    }
} 