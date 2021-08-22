import { useState, ChangeEvent, KeyboardEvent } from "react";
import { v1 as uuidv1 } from "uuid";
import { propsType } from "./types/index";
import * as Constants from "../../constants/index";

export const MainAddTask = (props: propsType) => {
  const [taskInput, setTaskInput] = useState("");

  let addTask = () => {
    if (taskInput.trim() === "") {
      alert(Constants.ADD_TASK_MSG);
    } else {
      let newTask = {
        id: uuidv1(),
        content: taskInput
      };
      props.setTasks([...props.tasks, newTask]);
      setTaskInput("");
    }
  };

  let onChangeTaskHandler = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskInput(ev.currentTarget.value);
  };

  let onKeyPressHandler = (ev: KeyboardEvent<HTMLTextAreaElement>) => {
    if (ev.key === "Enter") {
      addTask();
    }
  };

  return (
    <div>
      <textarea
        onChange={onChangeTaskHandler}
        value={taskInput}
        onKeyPress={onKeyPressHandler}
      />
      <br />
      <button onClick={addTask}>{Constants.ADD_TASK_BTN}</button>
    </div>
  );
};
