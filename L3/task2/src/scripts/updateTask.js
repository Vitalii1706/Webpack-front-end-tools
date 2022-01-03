import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList, deleteTask } from "./tasksGateway.js";

export const onToggleTask = (e) => {
  const taskId = e.target.dataset.id;
  const tasksList = getItem("tasksList");
  const { text, createDate } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;
  const updatedTask = {
    text,
    createDate,
    done,
    finishdate: done ? new Date().toISOString() : null,
  };
  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

const onDeleteTask = (e) => {
  const taskId = e.target.dataset.id;
  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

export const onListClick = (e) => {
  const isCheckbox = e.target.classList.contains("list-item__checkbox");
  const isDeleteBtn = e.target.classList.contains("list-item__delete-btn");
  if (isCheckbox) {
    onToggleTask(e);
  }
  if (isDeleteBtn) {
    onDeleteTask(e);
  }
};

// 1. prepare data
// 2. write data in data base
// 3. read new data from server
// 4. save new data to front-end srorage
// 5. update UI based on new data
