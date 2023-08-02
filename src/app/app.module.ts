import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { CourseService } from './services/course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { TodosComponent } from './components/todos/todos.component';
import { HttpPostComponent } from './http-post/http-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    ContactFormComponent,
    SignupFormComponent,
    TodosComponent,
    HttpPostComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
