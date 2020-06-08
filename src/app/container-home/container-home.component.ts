import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-container-home',
  templateUrl: './container-home.component.html',
  styleUrls: ['./container-home.component.scss'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ])
  ]

})


export class ContainerHomeComponent implements OnInit {
  state = 'small';
  constructor() { }


  ngOnInit(): void {

  }


}
