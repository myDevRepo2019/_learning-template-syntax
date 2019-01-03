import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-exchange/hero-detail.component';
import { HeroMasterComponent } from './hero-exchange/hero-master.component';
import { SizerChildComponent } from './font-size-change/sizer-child.component';
import { SizerParentComponent } from './font-size-change/sizer-parent.component';
import { BuiltInDirectiveParentComponent } from './built-in-attribute-directives/built-in-directive-parent.component';
import { BuiltInDirectiveChildComponent } from './built-in-attribute-directives/built-in-directive-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroMasterComponent,
    SizerChildComponent,
    SizerParentComponent,
    BuiltInDirectiveParentComponent,
    BuiltInDirectiveChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
