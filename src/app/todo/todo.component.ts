import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  newTask!: string;
  allTasks: Task[] =[];
  constructor() { }
  ngOnInit(): void {
  }
  addNewTask(){
    this.allTasks.push(new Task(this.newTask, false, false));
    this.newTask= '';
    console.log(this.allTasks);
  }
  changeTaskState(index:number){
    this.allTasks[index].isCompleted = 
      this.allTasks[index].isCompleted ? 
      false : true;
  }
  editTask(index:number){
    this.allTasks[index].isEditMode = true; 
  }

  removeTask(index:number){
    this.allTasks.splice(index, 1);
    console.log(this.allTasks);
    
  }
  saveEdit(event:any,index:number){
    this.allTasks[index].taskName = event.target.value;
    this.allTasks[index].isEditMode = false;
  }

}

