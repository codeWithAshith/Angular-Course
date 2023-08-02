import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  form = new FormGroup({
    todos: new FormArray([]),
  });

  addTodo(todo: HTMLInputElement) {
    this.todos.push(new FormControl(todo.value));
    todo.value = '';
  }

  removeTodo(index: number) {
    this.todos.removeAt(index);
  }

  get todos() {
    return this.form.get('todos') as FormArray;
  }
}
