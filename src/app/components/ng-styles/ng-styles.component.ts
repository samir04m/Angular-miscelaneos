import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-styles',
  template: `
    <p [ngStyle]="{ 'font-size': tamano+'px' }">
      Hola mundo.. esta es un tag
    </p>
  `,
  styles: []
})
export class NgStylesComponent implements OnInit {

   tamano:number = 20;

  constructor() { }

  ngOnInit() {
  }

}
