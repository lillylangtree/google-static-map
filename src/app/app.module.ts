import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MapModelService } from './map-model.service';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MapModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
