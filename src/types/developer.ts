import type { Task } from './task';

export type SkillLevel = 'junior' | 'middle' | 'senior' | 'lead';

export interface Developer {
  id: string;
  name: string;
  skillLevel: SkillLevel;
  tasks: Task[];
}