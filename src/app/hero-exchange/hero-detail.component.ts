import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Hero } from './../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: []
})
export class HeroDetailComponent implements OnInit {

  InterpolationText = 'blalba';
  @Input() fromParentToChild: string;
  @Output() anyRequest = new EventEmitter<Hero>();

  randomMasterCompHero = '';

  constructor() {
   // grabbing the property bound @Input values won't work
   // in the constructor -> it has to happen in ngOnInit() lifecycle hook
  }


  someHero: Hero =  new Hero(-1, 'SomeName', 'Zzzzzzzz'); // default sleeping her)

  onButtonClicked() {
    console.log('Button click detected in child compontent: ' + this.someHero.name);
    this.anyRequest.emit(this.someHero);
  }


  ngOnInit() {
    // Important
    // Citation: ngOnInit()
    /* Initialize the directive/component after Angular first 
       displays the data-bound properties and sets the directive/component's 
       input properties.
    */
    console.log('property bound string: ' + this.fromParentToChild);
    this.randomMasterCompHero = this.fromParentToChild;
  }

}
