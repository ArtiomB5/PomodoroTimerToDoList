import { propsType } from "./types/index";

export const CompletedTasksRender = (props: propsType) => {
  const completedTasksRender = props.completedTasks.map((task) => {
    return <div>{task.content} | COMPLETED🎉</div>;
  });
  return completedTasksRender;
};
