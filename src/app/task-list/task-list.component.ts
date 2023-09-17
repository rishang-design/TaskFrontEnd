import { Component,OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})


export class TaskListComponent implements OnInit {
  tasks:Task[]=[];
  constructor(private taskService:TaskService,private router:Router){}

  ngOnInit(): void {
    this.taskService.getAllTask().subscribe(data=>{
      this.tasks=data;
    })
      
  }

  private getTask(){
      this.taskService.getAllTask().subscribe(data =>{
      this.tasks = data;
    });
  }
  // private getTaskByID(id:number){
  //   this.taskService.getTaskById(id).subscribe(data=>{
  //     this.tasks=data;
  //   })
  // }
  onUpdate(id:number){
    this.router.navigate(['update',id]);
    console.log(this.tasks);
  }

  deleteTaskDetails(id: number){
    this.taskService.deleteTaskById(id).subscribe(data =>{
      console.log(data);
      this.getTask();
    })

  }
}
