import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Report } from './report';
import { ReportesActivosService} from './services/reportes-activos.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReportesActivosPipe } from './pipes/reportes-activos.pipe';

@Component({
  selector: 'app-reportes-activos',
  templateUrl: './reportes-activos.component.html',
  styleUrls: ['./reportes-activos.component.scss']
})
export class ReportesActivosComponent implements OnInit {
  All_reports: Report[];
  report: Report[];
  id: string;
  message:string;
  pageactual: number =1;
  actualPage: any;
  filterPost = ''
  constructor(public Service: ReportesActivosService){}
  

  ngOnInit(): void {
    this.getReports();
    this.onSubmit(this.id);
    this.Service.currentMessage.subscribe(message => this.message = message);
  }

  getReports() {
    this.Service.getReportes().subscribe((data) => {
      this.All_reports = data.filter(item => {
        if (!item.comentarioAdmin) {
          return item;
        }
      });

      console.log('respuesta de alumno->' + this.All_reports);
    });
  }

  
  
  onSubmit(id) {
    this.id = id;
    console.log(this.id);
    console.log("holaaa");
    this.newMessage();
    
  }
  newMessage() {
    this.Service.changeMessage(this.id);
  }

}


