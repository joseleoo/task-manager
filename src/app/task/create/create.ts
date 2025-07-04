import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../core/models/task.model';
import { TaskService } from '../../core/services/task';

@Component({
  selector: 'app-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  newTask: Task = this.getDefaultTask();

  constructor(@Inject(TaskService) private taskService: TaskService) {}

  private getDefaultTask(): Task {
    return {
      id: 0,
      title: '',
      description: '',
      dueDate: new Date(),
      priority: 'medium',
    };
  }

  createTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = this.getDefaultTask();
  }

  resetForm() {
    this.newTask = this.getDefaultTask();
  }
}
