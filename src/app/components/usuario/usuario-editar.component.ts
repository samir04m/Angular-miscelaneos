import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
      <h3>Usuario Editar</h3>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

   constructor(private router:ActivatedRoute) {
      this.router.params.subscribe(params=>{
         console.log("ruta hija editar", params);
      });
   }

  ngOnInit() {
  }

}
