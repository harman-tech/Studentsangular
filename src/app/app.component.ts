import { Component } from '@angular/core';
import { Student } from '../app/student';
import { StudentsService } from './students.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpractice';
  students: Student[] = []
  selectedStudent:any;

  constructor(private service: StudentsService, private router: Router) {
    this.students = this.service.getstudents()

  }
  show() {
    alert("hello harman ")
  }

  delete(student: any) {
    alert("would you like to delete a student data")
    const index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }
  editstudent(e: any, i: any) {
    console.log(e, i)
    console.log(i);
    
    console.log('i am a student object'+this.students[i])
    this.selectedStudent = this.students[i]
    
    
  }
  addStudent(addForm: NgForm) {
    this.students.push(addForm.value);
    addForm.resetForm()
  }
}
