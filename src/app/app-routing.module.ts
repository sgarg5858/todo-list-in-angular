import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path:'add',component:AddTaskComponent
  },
  {
    path:'',component:OverviewComponent
  },
  {
    path:'**',redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
