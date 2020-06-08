import { Component, OnInit } from '@angular/core';
import {  ReporteComponent } from '../reporte/reporte.component';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { ReporteService } from './services/reporte.service';
import { Reporte } from './models/reporte';
import { AllReportsService } from '../all-reports/services/all-reports.service';

@Component({
  selector: 'app-reporte-admin',
  templateUrl: './reporte-admin.component.html',
  styleUrls: ['./reporte-admin.component.scss']
})
export class ReporteAdminComponent implements OnInit {
  All_reports: Reporte[];
  message: string;
  constructor(public Service: ReporteService, public servicio: AllReportsService){}
  
  ngOnInit(): void {
    this.servicio.currentMessage.subscribe(message => this.message = message);
    console.log(this.message)
    this.getReports(this.message);
  }

  getReports(id: string) {
    this.Service.getReportes(this.message).subscribe((data) => {
      this.All_reports = data;
      console.log('respuesta de alumno->' + this.All_reports);
    });
  }

  onSubmit() {
    console.log("DELETE ACTIVATED")
    this.Service.deleteReportes(this.message).subscribe((data) => {
      this.All_reports = data;
      console.log('respuesta de alumno->' + this.All_reports);
    });
  }


}
