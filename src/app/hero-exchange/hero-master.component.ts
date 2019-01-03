import { Component, OnInit } from '@angular/core';
import { Hero} from './../hero';

@Component({
  selector: 'app-hero-master',
  templateUrl: './hero-master.component.html',
  styles: []
})
export class HeroMasterComponent implements OnInit {

  HeroName = 'Placeholder';
  someMasterComHero = 'MasterCompHero xyz';
  constructor() { }


  pickupTheEvent(theEventObject: Hero) {
    console.log('Button click arrived in master component.');
    this.HeroName = theEventObject.name;
  }

  ngOnInit() {
  }

}
