import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'To Do List App';

  constructor() {
    this.name = 'TO/DO App';
    this.changeName("Some Name");
  }

  changeName(name: string): void {
    this.name = name;
  }
}
