import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
        <app-ng-styles></app-ng-styles>

       <app-css></app-css>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, porro?</p>

       <app-clases></app-clases>

       <p [appResaltado]="'orange'">
           hello world
       </p>

       <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
