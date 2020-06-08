import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reportes-activos',
  templateUrl: './reportes-activos.component.html',
  styleUrls: ['./reportes-activos.component.scss']
})
export class ReportesActivosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const persona = localStorage.getItem('persona');
    console.log(persona);
  }

  getNombre(nombre){
     return nombre;
  }


}
