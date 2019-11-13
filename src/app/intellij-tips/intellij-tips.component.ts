import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intellij-tips',
  templateUrl: './intellij-tips.component.html',
  styleUrls: ['./intellij-tips.component.less']
})
export class IntellijTipsComponent implements OnInit {
  slideInterval = 300000;
  constructor() { }

  ngOnInit() {
  }

}
