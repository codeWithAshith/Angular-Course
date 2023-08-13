import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { CourseService } from './services/course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { TodosComponent } from './components/todos/todos.component';
import { HttpPostComponent } from './components/http-post/http-post.component';
import { AppErrorHandler } from './common/appError.handler';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    ContactFormComponent,
    SigninFormComponent,
    TodosComponent,
    HttpPostComponent,
    NotFoundComponent,
    UsersComponent,
    NavbarComponent,
    HomeComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: SigninFormComponent,
      },
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: 'users/:userId',
        component: UserDetailsComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: 'post',
        component: HttpPostComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: 'notFound',
        component: NotFoundComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]),
  ],
  providers: [
    CourseService,
    // { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
