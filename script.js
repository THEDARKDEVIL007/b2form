function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value !== "") {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(taskInput.value));
      taskList.appendChild(li);
  
      taskInput.value = "";
  
      li.addEventListener("click", function() {
        if (li.classList.contains("completed")) {
          li.classList.remove("completed");
        } else {
          li.classList.add("completed");
        }
      });
    }
  }
  