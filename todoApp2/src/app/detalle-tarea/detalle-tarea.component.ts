import { Component, OnInit, Input } from '@angular/core';
import Tarea from './../tarea';

@Component({
  selector: 'app-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.css']
})
export class DetalleTareaComponent implements OnInit {

  @Input() nacho: Tarea;

  constructor() { }

  ngOnInit() {
  }

}
