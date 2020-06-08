import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { EstadoService } from './services/estado.service';
import { Reporte } from './models/reporte';
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

  constructor(public Service: EstadoService) { }
  All_reports: Reporte[];
  ngOnInit(): void {
  }
  
  getReports() {
    this.Service.getReportes().subscribe((data) => {
      this.All_reports = data;
      console.log('respuesta de alumno->' + this.All_reports);
    });
  }
  
  onSubmit() {
    
    
    console.log("holaaa");
    
    /*this.Service.getReportes().subscribe((data) => {
      this.All_reports = data;
      //this.perro = this.All_reports.find(t=>t.numeroReporte)
      //console.log(this.perro);
      let Result = this.All_reports.map(choice => ({ id: "", name: choice._id }));
      console.log(Result);
    });
    */
  }

}
