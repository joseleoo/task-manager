import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  private getDefaultTask(): Task {
    const today = new Date();
    return {
      id: 0,
      title: '',
      description: '',
      dueDate: this.formatDateForInput(today),
      priority: 'medium',
    };
  }

  private formatDateForInput(date: Date): string {
    // Format date as YYYY-MM-DD for input[type="date"]
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  createTask(): void {
    console.log("Creating task:", this.newTask);
    
    if (this.validateTask()) {
      // Convert the date string back to Date object before saving
      const taskToCreate: Task = {
        ...this.newTask,
        dueDate: new Date(this.newTask.dueDate)
      };
      
      this.taskService.addTask(taskToCreate);
      
      // Navigate back to tasks list after creation
      this.router.navigate(['/tasks']);
      
      // Reset form for potential next use
      this.newTask = this.getDefaultTask();
    }
  }

  private validateTask(): boolean {
    if (!this.newTask.title.trim()) {
      alert('El título es requerido');
      return false;
    }
    if (!this.newTask.dueDate) {
      alert('La fecha límite es requerida');
      return false;
    }
    return true;
  }

  resetForm(): void {
    this.newTask = this.getDefaultTask();
  }
}
