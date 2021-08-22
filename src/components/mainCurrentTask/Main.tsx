import { taskType, propsType } from "./types/types";
import * as Constants from "../../constants/index";

export const CurrentTask = (props: propsType) => {
  const returnTaskHandler = (task: taskType) => {
    props.setTasks([...props.tasks, task]);
    props.takeTask({});
  };

  const completeTaskHandler = (task: propsType) => {
    props.setCompletedTasksArray([...props.completedTasks, task]);
    props.takeTask({});
  };

  return (
    <div>
      {props.task.content}
      {" | "}
      <button
        onClick={() => {
          returnTaskHandler(props.task);
        }}
      >
        {Constants.RETURN_TASK_BTN}
      </button>
      <button
        onClick={() => {
          completeTaskHandler(props.task);
        }}
      >
        {Constants.COMPLETE_TASK_BTN}
      </button>
    </div>
  );
};
