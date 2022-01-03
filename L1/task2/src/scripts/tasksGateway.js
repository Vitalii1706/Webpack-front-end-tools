const baseUrl = "https://61c732c3903185001754733f.mockapi.io/api/v1/tasks";

export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });

const mapTasks = (tasks) =>
  tasks.map(({ _id, ...rest }) => ({ id: _id, ...rest }));

export const getTasksList = () =>
  fetch(baseUrl)
    .then((resoponse) => resoponse.json())
    .then(mapTasks);
