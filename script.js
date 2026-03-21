var Add = document.getElementById("add")
var Task = document.getElementById("task")
var taskList = document.getElementById("taskList")
var checkedtask = document.getElementById("checkedtask")
var Tasks = []

Add.onclick = function() {
    if (Task.value === ""){
        alert("You must write something!")
    }
    else{
        var taskText = Task.value;
        var li1 = document.createElement("li");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        
        li1.appendChild(document.createTextNode(taskText));
        span1.textContent = "×";
        span1.classList.add("end-span"); 
        span2.innerHTML = '<i class="fas fa-edit"></i>';
        span2.classList.add("edit-span");

        li1.appendChild(span2);
        li1.appendChild(span1);
        
        if (taskList.children.length % 2 === 0) {
            li1.classList.add("even");
        } else {
            li1.classList.add("odd");
        }
        
        // validation if the task already exists
        for (var i = 0; i < Tasks.length; i++){
            if (taskText === Tasks[i]){
                alert("Task already exists!");
                Task.value = "";
                return;
            }
        }
        Tasks.push(taskText);
        taskList.appendChild(li1);
        Task.value = "";

        li1.onclick = function() {
            var li2 = document.createElement("li");
            li2.appendChild(document.createTextNode(taskText));

            var span1 = document.createElement("span");
            span1.textContent = "×";
            span1.classList.add("end-span");
            li2.appendChild(span1);

            if (checkedtask.children.length % 2 === 0) {
                li2.classList.add("even");
            } else {
                li2.classList.add("odd");
            }

            checkedtask.appendChild(li2);
            this.remove();

            span1.onclick = function(event) {
                event.stopPropagation();
                var idx = Tasks.indexOf(taskText);
                if (idx !== -1) Tasks.splice(idx, 1);
                this.parentElement.remove();
            }
        }

        span1.onclick = function(event) {
            event.stopPropagation();
            var idx = Tasks.indexOf(taskText);
            if (idx !== -1) Tasks.splice(idx, 1);
            this.parentElement.remove();
        }

        span2.onclick = function(event) {
            event.stopPropagation();
            var currentText = this.parentElement.firstChild.textContent;
            var input = document.createElement("input");
            input.value = currentText;
            input.classList.add("edit-input");
            this.parentElement.replaceChild(input, this.parentElement.firstChild);
            input.focus();

            function saveEdit(inputEl) {
                var newText = inputEl.value.trim();

                if (newText === "") {
                    alert("Task cannot be empty!");
                    inputEl.parentElement.replaceChild(document.createTextNode(currentText), inputEl);
                    return;
                }

                if (newText !== currentText && Tasks.indexOf(newText) !== -1) {
                    alert("Task already exists!");
                    inputEl.parentElement.replaceChild(document.createTextNode(currentText), inputEl);
                    return;
                }

                var idx = Tasks.indexOf(taskText);
                if (idx !== -1) Tasks[idx] = newText;
                taskText = newText; 

                inputEl.parentElement.replaceChild(document.createTextNode(newText), inputEl);
            }

            input.onblur = function() {
                saveEdit(this);
            };

            input.onkeydown = function(e) {
                if (e.key === "Enter") {
                    this.blur();
                }
            };
        }
    }
}