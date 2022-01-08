import { addTask } from './createTask';
import { listElem } from './storage';
import { onListClick } from './updateTask';

// eslint-disable-next-line import/prefer-default-export
export const initToDoListHandlers = () => {
  const createBtn = document.querySelector('.create-task-btn');
  createBtn.addEventListener('click', addTask);
  listElem.addEventListener('click', onListClick);
};
