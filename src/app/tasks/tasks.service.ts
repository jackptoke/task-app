import {Injectable} from '@angular/core';
import {Task} from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = []

  addTask(task: Task) {
    this.tasks.push(task);
  }

  removeTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
