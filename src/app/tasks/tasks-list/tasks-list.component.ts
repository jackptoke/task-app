import {Component, computed, inject, signal} from '@angular/core';

import {getTaskStatus, TaskItemComponent} from './task-item/task-item.component';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService = inject(TasksService);
  selectedFilter = signal<string>('all');
  tasks = computed(() => {
    if (this.selectedFilter() === 'all') {
      return this.tasksService.allTasks()
    }

    const taskStatus = getTaskStatus(this.selectedFilter());

    return this.tasksService.allTasks().filter(t => t.status === taskStatus);
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
