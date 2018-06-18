import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{
   showForm : boolean = false;
    
  taskList : any[]=[{
    "date":"20/5/18",
    "day":"Sunday",
    "time":"10am",
    "task":"Go to Shop"
  },
  {
    "date":"20/5/18",
    "day":"Sunday",
    "time":"10am",
    "task":"Go to Market"
  },
  {
    "date":"20/5/18",
    "day":"Sunday",
    "time":"10am",
    "task":"Task 3"
  },
  {
    "date":"20/5/18",
    "day":"Sunday",
    "time":"10am",
    "task":"Task 4"
  }]
   
  showFormToUser():void{
     this.showForm = !this.showForm;

   }
   onSubmit(form):void{
     
    if((form.target.date.value && form.target.date.value.length>0) && (form.target.day.value && form.target.day.value.length>0)
    && (form.target.time.value && form.target.time.value.length>0)
  && (form.target.task.value && form.target.task.value.length>0))
    {
        let obj = {
          "date":form.target.date.value,
          "day":form.target.day.value,
          "time":form.target.time.value,
          "task":form.target.task.value
        }
        this.taskList.push(obj);
        this.showForm = !this.showForm;
    }
    
   }

  deleteMe(item):void{
    this.taskList = this.taskList.filter(temp => temp.task!=item);
  }
  // editMe(item):void{
  //   this.taskList.
  //   this.showForm = !this.showForm;



}
