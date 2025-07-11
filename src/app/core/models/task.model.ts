export interface Task {
  id: number;
  title: string;
  description?: string;
  dueDate: Date | string; // Allow both Date and string types
  priority: 'low' | 'medium' | 'high';
}