import { setItem } from "./storage.js";
import { renderTasks } from "./renderer.js";
import { createTask, getTasksList } from "./tasksGateway.js";

export const addTask = () => {
  const inputElem = document.querySelector(".task-input");
  const text = inputElem.value;

  if (!text) {
    return;
  }
  inputElem.value = "";

  const newTask = {
    text,
    done: false,
    // id: (Math.random() * 1000).toFixed(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};
