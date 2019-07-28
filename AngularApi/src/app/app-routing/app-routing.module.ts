import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AddpostComponent} from '../addpost/addpost.component';
import{EmployeeComponent} from '../employee/employee.component';
import{PostdetailComponent} from '../postdetail/postdetail.component';

const routes: Routes = [
   { path: '', redirectTo: '/employee', pathMatch: 'full' },
   { path: 'addpost', component: AddpostComponent }, 
  { path: 'employee', component: EmployeeComponent }, 
  { path: 'detail/:id', component: PostdetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }






