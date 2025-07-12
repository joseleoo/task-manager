import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Task } from '../../core/models/task.model';
import { TaskService } from '../../core/services/task';

@Component({
  selector: 'app-view',
  imports: [CommonModule, RouterLink],
  templateUrl: './view.html',
  styleUrl: './view.css'
})
export class View implements OnInit {
  /**
   * An array containing the list of tasks to be managed or displayed.
   * Each element in the array is of type {@link Task}.
   */
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      this.taskService.deleteTask(id);
      this.loadTasks();
    }
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return 'priority-medium';
    }
  }

  formatDate(date: Date | string): string {
    // Handle both Date objects and date strings
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    // Check if the date is valid
    if (isNaN(dateObj.getTime())) {
      return 'Fecha inválida';
    }

    return dateObj.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
