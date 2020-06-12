import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataApiService } from './services/data-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})

export class AppComponent implements OnInit{
  title = 'angular';
  state = '';
  constructor(private dataApi: DataApiService) {
   
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  ngOnInit() {
  }

  
}


