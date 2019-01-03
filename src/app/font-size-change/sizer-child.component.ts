import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer-child',
  templateUrl: './sizer-child.component.html',
  styles: []
})
export class SizerChildComponent implements OnInit {

  CurrentSize: number;
  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() {

  }

  decreaseSize() {
    this.resize(-1);
  }

  increaseSize() {
    this.resize(+1);
  }

  resize(delta: number) {
    // this line simply sets upper(40) and lower limits(8)
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
    this.CurrentSize = this.size;
  }

  ngOnInit() {
    this.CurrentSize = this.size;

  }

}
