// eslint-disable-next-line import/no-unresolved
import { initToDoListHandlers } from "./list/toDoList";
import { renderTasks } from "./list/renderer";
import { getTasksList } from "./list/tasksGateway";
import { setItem } from "./list/storage";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasksList) => {
    setItem("tasksList", tasksList);
    renderTasks();
  });

  initToDoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === "tasksList") {
    renderTasks();
  }
};
window.addEventListener("storage", onStorageChange);
