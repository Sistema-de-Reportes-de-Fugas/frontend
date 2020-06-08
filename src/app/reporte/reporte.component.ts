import { Component, OnInit } from '@angular/core';
// import { User } from './user'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {
  text = '';
  endpoint: 'http://localhost:8080/api/reportes';

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(public fb: FormBuilder, private data: DataService, private http: HttpClient) { }
  tipoPersonas = ['Reportero', 'Agente de la SSP', 'Transeunte', 'Comerciante', 'Otro'];
  // userModel = new User('','','','','', '','', null);
  
  registrationForm = this.fb.group({
    nombre: "",
    apellido: [''],
    correo: [''],
    direccion: [''],
    referencia: [''],
    tipoPersona: [''],
    comentario: [''],
    imagen: ['']

  });

  ngOnInit(): void {
  }

  updateText(text){
    this.data.updateData(text);
    console.log("data shidori: " + this.data.updateData(text));
  }
  updateApellido(apellido){
    this.data.updateApellido(apellido);
    console.log("data shidori: " + this.data.updateApellido(apellido));
  }
  updateCorreo(correo){
    this.data.updateCorreo(correo);
  }
  updateDireccion(direccion){
    this.data.updateDireccion(direccion);
  }
  updateReferencia(referencia){
    this.data.updateReferencia(referencia);
  }
  updateProfesion(profesion){
    this.data.updateProfesion(profesion);
    console.log(this.data.updateProfesion(profesion));
  }
  updateComentarios(comentarios){
    this.data.updateComentarios(comentarios);
  }

  onSubmit() {
    if(this.registrationForm.value) {
      console.log(this.registrationForm.value);
      const data = this.registrationForm.value;
      const headers= new HttpHeaders({'Content-Type':'application/json'});
      this.http.post("http://localhost:8080/api/reportes",data, {headers}).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log('err:'+err);
        }
      );
    }
  }


}
