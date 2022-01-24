import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DelayPipe } from './delay.pipe';

import { NgIfComponent } from './components/ng-if.component';
import { NgIfWithTrackbyComponent } from './components/ng-if-with-trackby.component';
import { TsFilterComponent } from './components/ts-filter.component';
import { TsFilterWithTrackbyComponent } from './components/ts-filter-with-trackby.component';
import { HiddenComponent } from './components/hidden.component';
import { HiddenWithTrackbyComponent } from './components/hidden-with-trackby.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DelayPipe,
    TsFilterComponent,
    HiddenComponent,
    HiddenWithTrackbyComponent,
    NgIfComponent,
    TsFilterWithTrackbyComponent,
    NgIfWithTrackbyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
