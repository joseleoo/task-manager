import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../../core/models/task.model';
import { TaskService } from '../../core/services/task';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class UpdateComponent implements OnInit {
  task: Task = this.getDefaultTask();
  taskId: number = 0;
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadTask();
  }

  private loadTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskId = +id;
      const foundTask = this.taskService.getTaskById(this.taskId);
      
      if (foundTask) {
        this.task = { 
          ...foundTask,
          // Convert Date object to string format for input[type="date"]
          dueDate: this.formatDateForInput(foundTask.dueDate)
        };
        this.isLoading = false;
      } else {
        this.errorMessage = 'Tarea no encontrada';
        this.isLoading = false;
      }
    } else {
      this.errorMessage = 'ID de tarea inválido';
      this.isLoading = false;
    }
  }

  private getDefaultTask(): Task {
    return {
      id: 0,
      title: '',
      description: '',
      dueDate: this.formatDateForInput(new Date()),
      priority: 'medium',
    };
  }

  private formatDateForInput(date: Date | string): string {
    // Handle both Date objects and date strings
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    // Format date as YYYY-MM-DD for input[type="date"]
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  updateTask(): void {
    if (this.validateTask()) {
      // Convert the date string back to Date object before saving
      const taskToUpdate: Task = {
        ...this.task,
        dueDate: new Date(this.task.dueDate)
      };
      
      this.taskService.updateTask(this.taskId, taskToUpdate);
      this.router.navigate(['/tasks']);
    }
  }

  private validateTask(): boolean {
    if (!this.task.title.trim()) {
      this.errorMessage = 'El título es requerido';
      return false;
    }
    if (!this.task.dueDate) {
      this.errorMessage = 'La fecha límite es requerida';
      return false;
    }
    this.errorMessage = '';
    return true;
  }

  resetForm(): void {
    this.loadTask();
  }

  cancelEdit(): void {
    this.router.navigate(['/tasks']);
  }
}