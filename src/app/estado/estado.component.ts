import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { EstadoService } from './services/estado.service';
import { Reporte } from './models/reporte';
import { FormBuilder } from '@angular/forms';
import { AllReportsService } from '../all-reports/services/all-reports.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})


export class EstadoComponent implements OnInit {

  id: string;
  nombre: string;
  apellido: string;
  All_reports: Reporte[];
  message: string;
  All_perro: Reporte[];
  identificador: any;

  constructor(public Service: EstadoService, public fb: FormBuilder, public servicio: AllReportsService) { }

  ngOnInit(): void {

  }

  getReports(id: string) {
    this.Service.getReportes(id).subscribe((data) => {
      this.All_reports = data;
      console.log(this.All_perro);
      console.log('respuesta de alumno->' + this.All_reports);
    });
  }

  onSubmit(id) {
    this.identificador = id.value;
    if (this.identificador == '') {
      alert('Por favor ingresa tu numero de reporte');
      this.All_reports = [];
    }else {
      this.getReports(id.value);
      this.All_reports = [];
    }
  }

}
