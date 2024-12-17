import {Component, ElementRef, inject, viewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TasksService} from '../tasks.service';
import {TaskStatus} from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private tasksService = inject(TasksService);

  onAddTask(title: string, description: string) {
    const status: TaskStatus = 'OPEN';
    const task = { id: Math.floor(Math.random()*1_000).toString(), title: title, description: description, status: status };

    this.tasksService.addTask(task)
    this.formEl()?.nativeElement.reset();
  }
}
