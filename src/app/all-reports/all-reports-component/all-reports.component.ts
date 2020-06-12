import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Report } from '../report';
import { AllReportsService } from '../services/all-reports.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss']
})
export class AllReportsComponent implements OnInit{
  allReports: Report[];
  report: Report[];
  id: string;
  message: string;
  pageactual: 1;
  actualPage: any;
  filterPost = '';
  constructor(public Service: AllReportsService){}

  ngOnInit(): void {
    this.getReports();
    this.onSubmit(this.id);
    this.Service.currentMessage.subscribe(message => this.message = message);
  }

  getReports() {
    this.Service.getReportes().subscribe((data) => {
      this.allReports = data;
      console.log('respuesta de alumno->' + this.allReports);
    });
  }
  onSubmit(id) {
    this.id = id;
    console.log(this.id);
    this.newMessage();
  }
  newMessage() {
    this.Service.changeMessage(this.id);
  }

}
