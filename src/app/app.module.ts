import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { ContentLimiterPipe } from './content-limiter.pipe';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ContentLimiterPipe,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
