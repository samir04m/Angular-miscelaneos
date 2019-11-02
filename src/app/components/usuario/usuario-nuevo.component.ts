import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <h3>Usuario Nuevo</h3>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

   constructor(private router:ActivatedRoute) {
      this.router.parent.params.subscribe(params=>{
         console.log("ruta hija nuevo", params);
      });
   }

  ngOnInit() {
  }

}
