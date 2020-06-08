import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private content = new BehaviorSubject<string>('N/A');
  private content2 = new BehaviorSubject<string>('N/A');
  private content3 = new BehaviorSubject<string>('N/A');
  private content4 = new BehaviorSubject<string>('N/A');
  private content5 = new BehaviorSubject<string>('N/A');
  private content6 = new BehaviorSubject<string>('N/A');
  private content7 = new BehaviorSubject<string>('N/A');
  public share = this.content.asObservable();
  public share2 = this.content2.asObservable();
  public share3 = this.content3.asObservable();
  public share4 = this.content4.asObservable();
  public share5 = this.content5.asObservable();
  public share6 = this.content6.asObservable();
  public share7 = this.content7.asObservable();
  constructor() { }

  updateData(text){
    this.content.next(text);
  }
  updateApellido(apellido){
    this.content2.next(apellido);
  }
  updateCorreo(correo){
    this.content3.next(correo);
  }
  updateDireccion(direccion){
    this.content4.next(direccion);
  }
  updateReferencia(referencia){
    this.content5.next(referencia);
  }
  updateProfesion(profesion){
    this.content6.next(profesion);
  }
  updateComentarios(comentarios){
    this.content7.next(comentarios);
  }
}
