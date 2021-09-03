import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditstudentComponent } from './editstudent/editstudent.component';

const routes: Routes = [
  {path:'editstudent',component:EditstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
