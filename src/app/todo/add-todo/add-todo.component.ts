import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() addItem: EventEmitter<string> = new EventEmitter();
  public newTodo = '';
  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    if (this.newTodo) {
      this.addItem.emit(this.newTodo);
      this.newTodo = '';
    } else {
      alert('Enter text');
    }
  }
}
