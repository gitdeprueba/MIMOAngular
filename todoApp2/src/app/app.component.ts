import { Component } from '@angular/core';

import LISTADOTAREAS from './listado-tareas';
import Tarea from './tarea';

import { DetalleTareaComponent} from './detalle-tarea/detalle-tarea.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:  ['app.component.css']
})
export class AppComponent {

  listadoTareas = LISTADOTAREAS;
  tareaSeleccionada: Tarea;

  selectTarea(tarea: Tarea) {
    this.tareaSeleccionada = tarea;
  }
}
