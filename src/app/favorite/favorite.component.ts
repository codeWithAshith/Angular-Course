import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input("usingAlias") passedValue?: string;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('cliekc');
    this.passedValue = 'New Value';
  }
}
