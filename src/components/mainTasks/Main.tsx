import { taskType, propsType } from "./types/index";
import { v1 as uuidv1 } from "uuid";
import * as Constants from "../../constants/index";

export const TasksRender = (props: propsType) => {
  const removeTaskHandler = (id: string) => {
    let filteredTasks = props.tasks.filter((task) => task.id !== id);
    props.removeTask(filteredTasks);
  };

  const takeTaskHandler = (currentTask: taskType, newTask: taskType) => {
    if (JSON.stringify(currentTask) === "{}") {
      props.takeTask(newTask);
      removeTaskHandler(newTask.id);
    } else {
      alert(Constants.TAKE_TASK_MSG);
    }
  };

  const tasksMap = props.tasks.map((task) => {
    return (
      <div key={uuidv1()}>
        {task.content} {" | "}
        <button
          onClick={() => {
            takeTaskHandler(props.currentTask, task);
          }}
        >
          {Constants.TAKE_TASK_BTN}
        </button>
        <button
          onClick={() => {
            removeTaskHandler(task.id);
          }}
        >
          {Constants.REMOVE_TASK_BTN}
        </button>
      </div>
    );
  });
  return tasksMap;
};
