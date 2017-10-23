import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetallesLauraComponent } from './detalles-laura/detalles-laura.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallesLauraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
