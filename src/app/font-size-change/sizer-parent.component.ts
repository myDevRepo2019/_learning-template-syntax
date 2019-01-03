import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sizer-parent',
  templateUrl: './sizer-parent.component.html',
  styles: []
})
export class SizerParentComponent implements OnInit {

  fontSizePx = 15;

  constructor() { }

  ngOnInit() {
  }

}
