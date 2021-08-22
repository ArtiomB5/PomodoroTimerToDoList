export type taskType = {
  id: string;
  content: string;
};

export type propsType = {
  currentTask: taskType | undefined;
  tasks: Array<taskType>;
  takeTask: (task: taskType) => void;
  removeTask: (tasks: Array<taskType>) => void;
};
