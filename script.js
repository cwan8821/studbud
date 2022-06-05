let task = {
    name: "Finish Tutorial",
    description: "Use summary to complete exercises",
    duedate: "13/03/2022",
    estimatedCompletionTime: 30,
    taskStarted: false,
    taskCompleted: false,
  }

  console.log(task)

const taskForm = document.getElementById ("taskForm");
const taskNameInput = document.querySelector ("#taskNameInput");

console.log (taskForm);
console.log (taskNameInput);

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let taskName = taskNameInput.value;
  console.log(taskName)
  addTask(taskName, "Add more inputs to your task form", "18/03/2022", 15)
})

function createTask () {
  console.log("create task")
}

var tasklist = []

function addTask(name, description, duedate, estimatedCompletionTime, taskStarted, taskCompleted) {


  let task = {
    name,
    description,
    duedate,
    estimatedCompletionTime,
    taskStarted,
    taskCompleted,
  }


tasklist.push(task);
}

addTask("Finish Tutorial", "Use summary to complete exercises", "13/03/2022", 30, false, false )

console.log(tasklist)