import { Component, OnInit } from '@angular/core';
import {  ReporteComponent } from '../reporte/reporte.component';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { DataService } from '../data.service';
import { ReporteService } from './services/reporte.service';
import { Reporte } from './models/reporte';
import { AllReportsService } from '../all-reports/services/all-reports.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reporte-admin',
  templateUrl: './reporte-admin.component.html',
  styleUrls: ['./reporte-admin.component.scss']
})
export class ReporteAdminComponent implements OnInit {

  address: 'http://localhost:8080/api/reportes';

  allReports: Reporte[];
  message: string;
  comentarioAdmin: string;
  nombre2: Reporte[];
  nombre3: Reporte[];
  apellido2: Reporte[];
  comentario2: Reporte[];
  correo2: Reporte[];
  direccion2: Reporte[];
  referencia2: Reporte[];
  tipoPersona2: Reporte[];
  notificado2: Reporte[];
  id: [];
  someInput: string;
  comentarioAdmin2: Reporte[];
  constructor(public Service: ReporteService, public servicio: AllReportsService, public fb: FormBuilder, private http: HttpClient){}

  tipoPersonas = ['Reportero', 'Agente de la SSP', 'Transeunte', 'Comerciante', 'Otro'];
  // userModel = new User('','','','','', '','', null);
  registrationForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    correo: [''],
    direccion: [''],
    referencia: [''],
    tipoPersona: [''],
    comentario: [''],
    comentarioAdmin: ['']
  });

  ngOnInit(): void {
    this.servicio.currentMessage.subscribe(message => this.message = message);
    console.log(this.message);
    this.getReports(this.message);
  }

  getReports(id: string) {
    this.Service.getReportes(this.message).subscribe((data) => {
      this.allReports = data;
      console.log('respuesta de alumno->' + this.allReports);
      console.log(this.allReports);
      for (const report of data) {
        console.log(report);
        this.nombre2 = report.nombre;
        this.apellido2 = report.apellido;
        this.correo2 = report.correo;
        this.direccion2 = report.direccion;
        this.referencia2 = report.referencia;
        this.tipoPersona2 = report.tipoPersona;
        this.comentario2 = report.comentario;
        this.comentarioAdmin2 = report.comentarioAdmin;
      }

      this.registrationForm = this.fb.group({
        nombre: this.nombre2,
        apellido: this.apellido2,
        correo: this.correo2,
        direccion: this.direccion2,
        referencia: this.referencia2 ,
        tipoPersona: this.tipoPersona2,
        comentario: this.comentario2 ,
        comentarioAdmin: this.comentarioAdmin2,
      });
    });
  }
  onSubmit() {
    console.log('DELETE ACTIVATED');
    this.Service.deleteReportes(this.message).subscribe((data) => {
      this.allReports = data;
      console.log('respuesta de alumno->' + this.allReports);
    });
  }
  onSubmitAdmin(comentarioAdmin) {
    console.log(comentarioAdmin.value);
    this.comentarioAdmin2 = comentarioAdmin.value;
    if (this.comentarioAdmin2) {
      console.log(this.comentarioAdmin2);
      this.registrationForm = this.fb.group({
        nombre: this.nombre2,
        apellido: this.apellido2,
        correo: this.correo2,
        direccion: this.direccion2,
        referencia: this.referencia2 ,
        tipoPersona: this.tipoPersona2,
        comentario: this.comentario2 ,
        comentarioAdmin: comentarioAdmin.value,
      });
      console.log(this.registrationForm.value);
      console.log(this.message);
      const data = this.registrationForm.value;
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.put(this.address + '/' + this.message, data, {headers}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('err:' + err);
      }
    );
    }else {
      console.log('no existe');
    }
  }
  onSubmitBack() {
    console.log('Regresó');
  }

}
