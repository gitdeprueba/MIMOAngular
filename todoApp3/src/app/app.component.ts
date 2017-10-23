import { Component } from '@angular/core';
import TIPOSDELAURA from './tipos-de-laura';
import {DetallesLauraComponent} from './detalles-laura/detalles-laura.component';
import {Laura} from './laura';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tiposDeLaura = TIPOSDELAURA;
  lauraSeleccionada: Laura;
  setSelectedLaura(laura: Laura) {
    this.lauraSeleccionada = laura;
  }
}
