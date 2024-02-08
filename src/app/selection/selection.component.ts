import { Component, OnInit } from '@angular/core';
import { interval, retryWhen } from 'rxjs';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  public name: string = '';

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
  }

}
