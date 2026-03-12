// Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.querySelector(".task-container");
const inputTask = document.getElementById("input-task");
const form = document.querySelector("#form");
let noOfTasks = document.querySelector(".no-of-tasks");
let taskNumber = 0;

addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class = "fa-solid fa-check"></i>`;
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class = "fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    taskContainer.appendChild(task);
    taskNumber++;
    if (taskNumber === 1) {
      noOfTasks.textContent = "You Have " + taskNumber + " Pending Task";
    } else {
      noOfTasks.textContent = "You Have " + taskNumber + " Pending Tasks";
    }
  }

  let taskStatus = "uncompleted";

  checkButton.addEventListener("click", function () {
    if (taskStatus === "uncompleted") {
      checkButton.classList.add("done");
      checkButton.parentElement.style.textDecoration = "line-through";
      taskStatus = "completed";

      taskNumber--;
      if (taskNumber === 1) {
        noOfTasks.textContent = "You Have " + taskNumber + " Pending Task";
      } else {
        noOfTasks.textContent = "You Have " + taskNumber + " Pending Tasks";
      }
    } else {
      checkButton.classList.remove("done");

      checkButton.parentElement.style.textDecoration = "none";
      taskStatus = "uncompleted";

      taskNumber++;
      if (taskNumber === 1) {
        noOfTasks.textContent = "You Have " + taskNumber + " Pending Task";
      } else {
        noOfTasks.textContent = "You Have " + taskNumber + " Pending Tasks";
      }
    }
  });

  deleteButton.addEventListener("click", function () {
    checkButton.parentElement.remove();

    if (taskStatus === "completed") {
      noOfTasks.textContent = noOfTasks.textContent;
    } else {
      taskNumber--;
      if (taskNumber === 1) {
        noOfTasks.textContent = "You Have " + taskNumber + " Pending Task";
      } else {
        noOfTasks.textContent = "You Have " + taskNumber + " Pending Tasks";
      }
    }
  });

  console.log(checkButton.parentElement.parentElement);
  inputTask.value = "";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
