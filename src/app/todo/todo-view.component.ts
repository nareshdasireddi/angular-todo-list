import { TodoModel } from './todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css'],
})
export class TodoViewComponent implements OnInit {
  public todos: Array<TodoModel> = [
    {
      todoText: 'Sample Todo',
      markedAsDone: false,
      deleted: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  addTodo(newItem: string) {
    const newTodo: TodoModel = {
      todoText: '',
      markedAsDone: false,
      deleted: false,
    };
    newTodo.todoText = newItem;
    this.todos.push(newTodo);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  doneTodo(index: number) {
    this.todos[index].markedAsDone = true;
  }
}
