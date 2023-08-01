import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = ['Course 1', 'Course 2'];

  onAdd() {
    this.courses.push(`Course ${this.courses.length + 1}`);
  }

  onRemove(index: number) {
    this.courses.splice(index, 1);
  }
}
