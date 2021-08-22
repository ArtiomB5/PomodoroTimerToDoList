import { useState } from "react";
import { MainAddTask } from "./components/mainAddTask/Main";
import { TasksRender } from "./components/mainTasks/Main";
import { CurrentTask } from "./components/mainCurrentTask/Main";
import { CompletedTasksRender } from "./components/mainCompletedTasksRender/Main";
import { TimerRender } from "./components/mainTimer/Main";
import "./styles.css";

export default function App() {
  //timer data
  const [sec, setSec] = useState(0);
  //all tasks
  const [allTheTasks, setAllTheTasks] = useState([]);
  //current task
  const [currentTask, setCurrentTask] = useState({});
  //completed tasks
  const [completedTasks, setCompletedTasks] = useState([]);

  //styles
  let headerStyle = {
    color: "red"
  };
  let timerStyle = {
    color: "green"
  };
  let completedTasksstyle = {
    color: "gray"
  };

  return (
    <div className="App">
      <h1 style={headerStyle}>🍅 Pomodoro Timer & To Do List 🍅</h1>
      <TimerRender />
      <hr />
      <h2>Tasks</h2>
      <div>
        <MainAddTask tasks={allTheTasks} setTasks={setAllTheTasks} />
        <br />
        <h3>Current Task</h3>
        {JSON.stringify(currentTask) !== "{}" ? (
          <CurrentTask
            task={currentTask}
            takeTask={setCurrentTask}
            tasks={allTheTasks}
            setTasks={setAllTheTasks}
            completedTasks={completedTasks}
            setCompletedTasksArray={setCompletedTasks}
          />
        ) : (
          "Current task is absent!"
        )}
        <br />
        <h3>Uncompleted Tasks</h3>
        {allTheTasks.length === 0 ? (
          "Uncompleted tasks list is empty!"
        ) : (
          <TasksRender
            currentTask={currentTask}
            tasks={allTheTasks}
            takeTask={setCurrentTask}
            removeTask={setAllTheTasks}
          />
        )}
        <br />
        <h3>Completed Tasks</h3>
        <div style={completedTasksstyle}>
          {completedTasks.length === 0 ? (
            "Completed tasks list is empty!"
          ) : (
            <CompletedTasksRender completedTasks={completedTasks} />
          )}
        </div>
      </div>
    </div>
  );
}
