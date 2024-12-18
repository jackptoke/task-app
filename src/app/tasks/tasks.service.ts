import {Injectable, signal} from '@angular/core';
import {Task, TaskStatus} from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = signal<Task[]>([])
  allTasks = this.tasks.asReadonly()

  addTask(task: Task) {
    // this.tasks.push(task);
    const tasksList = [...this.tasks(), task];
    this.tasks.update(tasks => [...tasksList.sort((a, b) => a.id.localeCompare(b.id))]);
  }

  updateTaskStatus(taskId: string, status: TaskStatus) {
    this.tasks.update(
      (tasks) =>
        tasks.map(task => task.id === taskId ? { ...task, status: status } : task)
          .sort((a, b) => a.id.localeCompare(b.id)));
  }
}
