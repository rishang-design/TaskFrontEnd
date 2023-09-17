import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL="http://localhost:8080/task";
  constructor(private httpclient:HttpClient) { }

    getAllTask():Observable<Task[]>{
      return this.httpclient.get<Task[]>(`${this.baseURL}`);
    }
    
    getTaskById(id:number):Observable<Task>{
      return this.httpclient.get<Task>(`${this.baseURL}/${id}`);
    }
    
    addTask(tasks:Task){
      return this.httpclient.post(`${this.baseURL}`,tasks);
    }

    updateTask(id:number,tasks:Task):Observable<Task>{
      return this.httpclient.put<Task>(`${this.baseURL}/${id}`,tasks);
    }

    deleteTaskById(id:number):Observable<Task>{
      return this.httpclient.delete<Task>(`${this.baseURL}/${id}`);
    }
  }
