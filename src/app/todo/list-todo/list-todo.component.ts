import { TodoModel } from './../todo.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
})
export class ListTodoComponent implements OnInit {
  @Input() todoData: Array<TodoModel>;
  @Input() access: boolean;

  @Output() deleteItem: EventEmitter<number> = new EventEmitter();
  @Output() markAsDone: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.todoData);
  }
  markingAsDone(index: number) {
    this.markAsDone.emit(index);
  }
  deletingTodo(index: number) {
    this.deleteItem.emit(index);
  }
}
