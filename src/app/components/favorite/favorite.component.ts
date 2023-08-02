import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('usingAlias') passedValue?: string;
  @Output() getNewValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.passedValue = 'New Value';
    this.getNewValue.emit(this.passedValue);
  }
}
