import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Report } from '../report';
import { AllReportsService } from '../services/all-reports.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss']
})
export class AllReportsComponent{
  All_reports: Report[];
  report: Report[];
  id: string;
  message:string;
  pageactual: number =1;
  actualPage: any;
  constructor(public Service: AllReportsService){}
  
  ngOnInit(): void {
    this.getReports();
    this.onSubmit(this.id);
    this.Service.currentMessage.subscribe(message => this.message = message);
  }

  getReports() {
    this.Service.getReportes().subscribe((data) => {
      this.All_reports = data;
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
