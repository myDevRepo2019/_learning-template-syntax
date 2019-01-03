import { Component, OnInit } from '@angular/core';
import {Hero} from './../hero';

@Component({
  selector: 'app-built-in-directive-parent',
  templateUrl: './built-in-directive-parent.component.html',
  styles: []
})
export class BuiltInDirectiveParentComponent implements OnInit {

  currentClasses: {};
  currentStyles: {};
  canSave = true;
  isUnchanged = true;
  isSpecial = true;

  currentHero = Hero.heroes[0];




  constructor() {
  }

  setCurrentClasses() {

    this.currentClasses = {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special': this.isSpecial
    };
  }


  setCurrentStyles() {
    this.currentStyles = {
    'font-style': this.canSave ? 'italic' : 'normal',
    'font-weight': this.isUnchanged ? 'bold' : 'normal',
    'font-size': this.isSpecial ? '24px' : '12px'
  }
  }



  ngOnInit() {
    this.setCurrentClasses();
    this.setCurrentStyles();
    console.log('current classes set');
  }

}
