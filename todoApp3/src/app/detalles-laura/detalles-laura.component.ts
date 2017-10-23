import { Component, OnInit, Input } from '@angular/core';
import {Laura} from '../laura';

@Component({
  selector: 'app-detalles-laura',
  templateUrl: './detalles-laura.component.html',
  styleUrls: ['./detalles-laura.component.css']
})
export class DetallesLauraComponent implements OnInit {

  @Input() Laura;

  constructor() { }

  ngOnInit() {
  }

}
