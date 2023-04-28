import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Main() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([
    { checked: false, name: "Sortir Les chiens" },
    { checked: false, name: "Faire les courses" },
  ]);
  const taskListClone = [...taskList];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(taskList);
    taskListClone.push({
      checked: false,
      name: newTask,
    });
    setTaskList(taskListClone);
    setNewTask("");
  };

  return (
    <main>
      <div className="taskList">
        {taskList.map((item, index) => {
          return (
            <div className="task" key={index}>
              <input
                type="checkbox"
                onChange={() => {
                  taskListClone[index].checked = !taskListClone[index].checked;
                  console.log(taskListClone);
                  setTaskList(taskListClone);
                }}
              />
              <p style={{ textDecoration: item.checked && "line-through" }}>
                {item.name}
              </p>
              <FontAwesomeIcon
                icon="fa-regular fa-trash-can"
                onClick={() => {
                  taskListClone.splice(index, 1);
                  setTaskList(taskListClone);
                }}
              />
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="new Task"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <button type="submit">Add Task</button>
      </form>
    </main>
  );
}
