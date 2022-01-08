import { renderTasks } from "./renderer";
import { getItem, setItem } from "./storage";
import { getTasksList, updateTask, deleteTask } from "./tasksGateway";

export const handleClick = (e) => {
  const taskId = e.target.dataset.id;
  const tasksList = getItem("tasksList");
  const { text } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;
  const updatedTask = {
    text,
    done,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

const onTaskDelete = (e) => {
  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

export const onListClick = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");
  const isDeleteBtn = e.target.classList.contains("list__item-delete-btn");

  if (isCheckbox) {
    handleClick(e);
  }
  if (isDeleteBtn) {
    onTaskDelete(e);
  }
};

// 1. prepare data
// 2. write data in data base
// 3. read new data from server
// 4. save new data to front-end srorage
// 5. update UI based on new data
