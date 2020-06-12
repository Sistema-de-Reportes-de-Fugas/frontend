import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReporteClienteServiceService } from './reporte-cliente-service.service';

@Component({
  selector: 'app-reporte-cliente-enviado',
  templateUrl: './reporte-cliente-enviado.component.html',
  styleUrls: ['./reporte-cliente-enviado.component.scss']
})
export class ReporteClienteEnviadoComponent implements OnInit {

  numeroReporte: [];

  constructor(public reporteService: ReporteClienteServiceService) {}
  ngOnInit(): void {
    this.obtenerReportes();
  }
  obtenerReportes() {
    this.reporteService.getReportes().subscribe((data) => {
      this.numeroReporte = data;
      console.log('respuesta de reportes->' + this.numeroReporte);
    });
  }
}
