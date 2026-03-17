var Add = document.getElementById("add")
var Task = document.getElementById("task")
var taskList = document.getElementById("taskList")
var checkedtask = document.getElementById("checkedtask")

Add.onclick = function() {
    // console.log(Task.value)

    if (Task.value === ""){
        alert("You must write something!")
    }
    else{
        var taskText = Task.value;
        var li1 = document.createElement("li");
        var span = document.createElement("span");
        
        li1.appendChild(document.createTextNode(taskText));
        span.textContent = "×";
        span.classList.add("end-span"); 
        
        li1.appendChild(span);
        
        if (taskList.children.length % 2 === 0) {
            li1.classList.add("even");
        } else {
            li1.classList.add("odd");
        }
        
        taskList.appendChild(li1);
        Task.value = "";

        // adding seperate section for checked tasks when clicking on the task in the origrinal list
        li1.onclick = function() {
            var li2 = document.createElement("li");
            li2.appendChild(document.createTextNode(li1.value));

            if (checkedtask.children.length % 2 === 0) {
            li2.classList.add("even");
            } else {
                li2.classList.add("odd");
            }

            checkedtask.appendChild(li2)
            this.parentElement.remove();
        }

        span.onclick = function() {
            this.parentElement.remove();
        }
    }
} 