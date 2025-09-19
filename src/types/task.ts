export type TaskStatus = 'todo' | 'in process' | 'on review' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}