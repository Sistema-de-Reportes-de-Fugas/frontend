import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loginUserData = {};
  constructor(public fb: FormBuilder, private Auth: AuthService) { }

  registrationForm = this.fb.group({
    correo: [''],
    contrasena: ['']
  });
  ngOnInit(): void {
  }
  onSubmit() {
    const correo = this.registrationForm.controls.correo.value;
    const contrasena = this.registrationForm.controls.contrasena.value;
    console.log(correo, contrasena);

    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('persona', correo );
    localStorage.setItem('contrasena', contrasena);

  }
  // obtenerLocalStorage

}
