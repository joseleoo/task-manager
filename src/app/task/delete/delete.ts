import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../../core/models/task.model';
import { TaskService } from '../../core/services/task';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete.html',
  styleUrl: './delete.css'
})
export class DeleteComponent implements OnInit {
  task: Task | null = null;
  taskId: number = 0;
  isLoading: boolean = true;
  errorMessage: string = '';
  isDeleting: boolean = false;

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
        this.task = foundTask;
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

  confirmDelete(): void {
    if (this.task) {
      this.isDeleting = true;
      
      // Simulate a brief delay for better UX (optional)
      setTimeout(() => {
        this.taskService.deleteTask(this.taskId);
        this.router.navigate(['/tasks'], { 
          queryParams: { 
            message: `Tarea "${this.task?.title}" eliminada exitosamente` 
          }
        });
      }, 500);
    }
  }

  cancelDelete(): void {
    this.router.navigate(['/tasks']);
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
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
