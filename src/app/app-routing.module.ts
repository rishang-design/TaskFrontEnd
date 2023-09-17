import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  // {path: '',
  // redirectTo: '/task',
  // pathMatch: 'full',
  // component: TaskListComponent},
  {path:"task", component:TaskListComponent},
  {path:"addtask",component:AddTaskComponent},
  {path:"update/:id",component:UpdateTaskComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
