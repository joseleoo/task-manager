import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { SEED_TASKS } from '../data/seed-data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.initializeSeedData();
  }

  private initializeSeedData(): void {
    this.tasks = [...SEED_TASKS];
  }

  addTask(task: Task): void {
    // Generate a unique ID for the new task
    task.id = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  updateTask(id: number, updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask, id };
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // Optional: Method to reset to seed data
  resetToSeedData(): void {
    this.initializeSeedData();
  }

  // Optional: Method to clear all data
  clearAllTasks(): void {
    this.tasks = [];
  }
}
