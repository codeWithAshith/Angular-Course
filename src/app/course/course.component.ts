import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  course = {
    title: 'Angular Coursr',
    rating: 4.9642,
    students: 40232,
    price: 212.43,
    releaseDate: new Date(2022, 3, 3),
  };
  lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquam quia natus possimus mollitia modi vero harum suscipit soluta laudantium.';
}
