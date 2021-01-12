import { Component, OnInit } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  filter: string = "";
  
  // create an array of todos, do I need the word public

  todos: Todo[] = [
    
    {task: 'fold clothes', completed: true },
    {task: 'put clothes in drawer', completed: false },
    {task: 'pet dog', completed: true },
    {task: 'be awesome', completed: false },

  ]

  // add title

  title: string = "My ToDo List"
  comment: string ="A place to store your to-dos"
  newTodo: string; 



  // click completed button

  strikethrough=function (todo): void {
    todo.completed = true;

  }

  // add task

  addTask=function (todo:string): void {
    console.log (todo);
    let newTask = {
      task: todo, completed: false, 
    }
    this.todos.push (newTask)
    
  }

  removeTask=function (task:string): void {
        
    let removeIndex = this.todos.findIndex(function(todo){
      return todo.task===task
    })

    this.todos.splice(removeIndex, 1)
    
  } 

  getFilteredResults(): Todo[] {
    return this.todos.filter((todo) => {
      return todo.task.toLowerCase().includes(this.filter.toLowerCase());
    });
  }


  constructor() {}

  ngOnInit() {}

}

