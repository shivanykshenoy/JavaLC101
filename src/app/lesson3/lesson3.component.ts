import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.less']
})
export class Lesson3Component implements OnInit {
  slideInterval = 300000;
  hashMapList = [
    {name: 'John'}, {name: 'Bob'}, {name: 'Joe'}, {name: 'Sam'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
