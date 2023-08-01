import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  title = 'Courses Component';
  imageUrl = 'https://picsum.photos/200/300';
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
