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

  email = 'a@gmail.com';

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  onSave() {
    console.log('Button clicked');
    console.log(this.email);
  }
}
