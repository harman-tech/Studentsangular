import { Injectable } from '@angular/core';
import {Student} from '../data';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students:Student[]=[
    {id:1,"name":"shitiz","email":"shitiz@gmail.com","phone":2345},
    {id:2,"name":"james","email":"james@gmail.com","phone":2345},
    {id:3,"name":"ronda","email":"ronda@gmail.com","phone":2345},
    {id:4,"name":"colin","email":"colin@gmail.com","phone":2345},
    {id:5,"name":"john","email":"john@gmail.com","phone":2345},
    {id:6,"name":"tom","email":"tom@gmail.com","phone":2345},
  ]
  constructor() { 
    
  }
  getstudents(){
    return this.students;

  }
 
}
