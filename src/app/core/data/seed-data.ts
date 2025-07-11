import { Task } from '../models/task.model';

export const SEED_TASKS: Task[] = [
  {
    id: 1,
    title: 'Completar documentación del proyecto',
    description: 'Escribir la documentación técnica completa para el sistema de gestión de tareas, incluyendo guías de usuario y API.',
    dueDate: new Date('2025-07-15'),
    priority: 'high'
  },
  {
    id: 2,
    title: 'Revisar código de la aplicación',
    description: 'Realizar code review de los últimos commits y verificar que cumplan con los estándares de calidad.',
    dueDate: new Date('2025-07-12'),
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Configurar pipeline CI/CD',
    description: 'Implementar pipeline de integración continua y despliegue automático para el proyecto.',
    dueDate: new Date('2025-07-20'),
    priority: 'high'
  },
  {
    id: 4,
    title: 'Actualizar dependencias npm',
    description: 'Revisar y actualizar todas las dependencias del proyecto a sus versiones más recientes.',
    dueDate: new Date('2025-07-18'),
    priority: 'low'
  },
  {
    id: 5,
    title: 'Diseñar interfaz de usuario mejorada',
    description: 'Crear mockups y prototipos para mejorar la experiencia de usuario de la aplicación.',
    dueDate: new Date('2025-07-25'),
    priority: 'medium'
  },
  {
    id: 6,
    title: 'Implementar tests unitarios',
    description: 'Escribir tests unitarios para todos los componentes y servicios de la aplicación.',
    dueDate: new Date('2025-07-22'),
    priority: 'high'
  },
  {
    id: 7,
    title: 'Optimizar rendimiento',
    description: 'Analizar y optimizar el rendimiento de la aplicación, especialmente en dispositivos móviles.',
    dueDate: new Date('2025-07-30'),
    priority: 'medium'
  },
  {
    id: 8,
    title: 'Preparar presentación demo',
    description: 'Crear una presentación demo para mostrar las funcionalidades principales del sistema.',
    dueDate: new Date('2025-07-14'),
    priority: 'low'
  }
];