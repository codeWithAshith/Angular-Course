import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  title = 'Courses Component';
  courses = ['Course 1', 'Course 2', 'Course 3'];
}
