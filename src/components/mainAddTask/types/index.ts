type taskType = {
  id: string;
  content: string;
};
export type propsType = {
  tasks: Array<taskType>;
  setTasks: (param: string) => void;
};
