import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing-project';
  

  
  

  addTask(task: void) {
    this.push(this)
  
    
    
  }

  deleteTask(task: string) {
  }

  getTasks(): string[] {
    return [];
  }
}
