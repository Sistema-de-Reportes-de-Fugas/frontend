import { Component, OnInit } from '@angular/core';
// import { User } from './user'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ReporteService } from '../reporte/service/reporte.service';
import { Report } from '../all-reports/report';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {
  text = '';
  endpoint: 'http://localhost:8080/api/reportes';
  allReports: Report[];

  nombre2: [];
  nombre3: [];
  apellido2: [];
  comentario2: [];
  correo2: [];
  direccion2: [];
  referencia2: [];
  tipoPersona2: [];
  idioma2: [];
  identificador: any;

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(public fb: FormBuilder, private data: DataService, private http: HttpClient, public Service: ReporteService) { }
  tipoPersonas = ['Reportero', 'Agente de la SSP', 'Transeunte', 'Comerciante', 'Otro'];
  // userModel = new User('','','','','', '','', null);

  registrationForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    correo: ['', Validators.required],
    direccion: ['', Validators.required],
    referencia: [''],
    tipoPersona: [''],
    comentario: ['', Validators.required],
    imagen: [''],
    idioma: ['']

  });

  ngOnInit(): void {

  }

  updateText(text) {
    this.data.updateData(text);
  }
  updateApellido(apellido) {
    this.data.updateApellido(apellido);
  }
  updateCorreo(correo) {
    this.data.updateCorreo(correo);
  }
  updateDireccion(direccion) {
    this.data.updateDireccion(direccion);
  }
  updateReferencia(referencia) {
    this.data.updateReferencia(referencia);
  }
  updateProfesion(profesion) {
    this.data.updateProfesion(profesion);
    console.log(this.data.updateProfesion(profesion));
  }
  updateComentarios(comentarios) {
    this.data.updateComentarios(comentarios);
    this.updateIdioma();
  }
  updateIdioma() {
    this.data.updateIdioma(window.navigator.language);
  }
  getReports(id: string) {
    this.Service.getReportes(id).subscribe((data) => {

      this.allReports = data;

      console.log(data);
      this.nombre2 = data.nombre;
      this.apellido2 = data.apellido;
      this.comentario2 = data.comentario;
      this.correo2 = data.correo;
      this.direccion2 = data.direccion;
      this.referencia2 = data.referencia;
      this.tipoPersona2 = data.tipoPersona;
      this.idioma2 = data.idioma;

      if (data === Error) {
        console.log('Se murio correo');
      }
    });



  }

  updateReports(id: string) {
    if (this.registrationForm.value) {
      console.log(this.registrationForm.value);
      const data = this.registrationForm.value;
      data.idioma.value = window.navigator.language;
      console.log(data);
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.put(this.endpoint + '/' + id, data, { headers }).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('err:' + err);
        }
      );
    }
  }

  /*
  updateReports(id: string) {
   const data = this.registrationForm.value
   console.log(data)
   this.Service.updateReportes(id).subscribe(data);
  }*/



  onSubmit() {
    if (this.registrationForm.value) {
      console.log(this.registrationForm.value);
      const data = this.registrationForm.value;
      data.idioma = window.navigator.language;
      console.log(data);
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post(this.endpoint, data, { headers }).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('err:' + err);
        }
      );
    }
  }
  onSubmitReport(id) {
    this.identificador = id.value;
    if (this.identificador === '') {
      alert('Por favor ingresa tu numero de reporte');
    } else {
      this.getReports(id.value);
    }

  }

  onSubmitUpdate() {

    if (this.identificador !== '') {
      this.updateReports(this.identificador);

    }
    else {
      this.registrationForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        correo: ['', Validators.required],
        direccion: ['', Validators.required],
        referencia: [''],
        tipoPersona: [''],
        comentario: ['', Validators.required],
      });
    }
  }
  onSubmitClose() {
    this.identificador = '';
  }
}
