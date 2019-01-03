import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-exchange/hero-detail.component';
import { HeroMasterComponent } from './hero-exchange/hero-master.component';
import { SizerChildComponent } from './font-size-change/sizer-child.component';
import { SizerParentComponent } from './font-size-change/sizer-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroMasterComponent,
    SizerChildComponent,
    SizerParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
