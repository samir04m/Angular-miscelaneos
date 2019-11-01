import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-styles',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo.. esta es un tag
    </p>

    <button class="btn btn-primary mx-2" (click)="tamano = tamano+5">
      <i class="fa fa-plus"></i>
     </button>
     <button class="btn btn-primary mx-2" (click)="tamano = tamano-5">
       <i class="fa fa-minus"></i>
      </button>

  `,
  styles: []
})
export class NgStylesComponent implements OnInit {

   tamano:number = 25;

  constructor() { }

  ngOnInit() {
  }

}
