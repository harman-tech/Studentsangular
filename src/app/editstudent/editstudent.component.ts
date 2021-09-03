import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms'
import { Student } from '../student';

import { EditForm } from '../../EditForm';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})

export class EditstudentComponent implements OnInit {
 

  studentForm: FormGroup;
  @Input() student: Student =
    {
      id: 0,
      name: 'gabbar',
      email: 'gabbar@yahoo.com',
      phone: 3333,
    };

  constructor(private fb: FormBuilder) {
    this.studentForm = fb.group({
      id: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl('')
    })
  }

  ngOnInit(): void {

  }


}


