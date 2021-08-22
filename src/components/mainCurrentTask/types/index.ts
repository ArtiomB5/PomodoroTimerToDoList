export type taskType = {
  id: string;
  content: string;
};

export type propsType = {
  task: taskType;
  takeTask: (task: taskType) => void;
  tasks: Array<taskType>;
  setTasks: (tasks: Array<taskType>) => void;
  completedTasks: Array<taskType>;
  setCompletedTasksArray: (completedTasks: Array<taskType>) => void;
};
