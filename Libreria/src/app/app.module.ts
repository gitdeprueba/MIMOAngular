import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PrincipalComponent } from './principal/principal.component';
import { MasVendidosComponent } from './mas-vendidos/mas-vendidos.component';
import { NovedadesComponent } from './novedades/novedades.component';

import {routing} from './app.routing';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule( {
  declarations: [
    AppComponent,
    MenuComponent,
    BuscarComponent,
    PrincipalComponent,
    MasVendidosComponent,
    NovedadesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
} )

export class AppModule { }
