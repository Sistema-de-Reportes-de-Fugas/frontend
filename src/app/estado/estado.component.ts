import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { EstadoService } from './services/estado.service';
import { Reporte } from './models/reporte';
import { FormBuilder } from '@angular/forms';
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
  All_reports: Reporte[];
  updateReport: Reporte[] = [];
  id: any;
  @Input() nombre: string; 
  apellido: string;

  


  constructor(public Service: EstadoService, public fb: FormBuilder) { }
  ngOnInit(): void {

  }

  onEmpCreate(){
    //console.log(this.name,this.empoloyeeID);
    console.log("nombre", this.nombre)
    console.log("hola")
    let customObj = new Reporte();
    customObj.nombre = "Enrique Ponce";
    this.updateReport.push(customObj);
    console.log(this.updateReport)
    
  }

  getReports(id: string) {
    this.Service.getReportes(id).subscribe((data) => {
      this.All_reports = data;
      console.log('respuesta de alumno->' + this.All_reports);
    });
  }
  updateReports(id: string) {
    console.log("nombre", this.nombre)
    this.Service.updateReportes(id).subscribe((data) => {
      this.updateReport = data;
    });

  }
  
  onSubmit(text) {
    console.log(text.value);
    this.id = text.value
    this.getReports(text.value);
  }

  onUpdate(text) {
    this.onEmpCreate();
    this.updateReports(this.id);
  }

}
