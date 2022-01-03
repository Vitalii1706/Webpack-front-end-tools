import { getItem, listElem } from "./storage.js";

export const renderTasks = () => {
  const tasksList = getItem("tasksList") || [];

  listElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list-item", "list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add("list-item__checkbox");
      if (done) {
        listItemElem.classList.add("list-item_done");
      }
      const textElem = document.createElement("span");
      textElem.classList.add("list-item__text");
      textElem.textContent = text;
      const deleteBtnElem = document.createElement("button");
      deleteBtnElem.classList.add("list-item__delete-btn");
      deleteBtnElem.dataset.id = id;
      listItemElem.append(checkbox, textElem, deleteBtnElem);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};
