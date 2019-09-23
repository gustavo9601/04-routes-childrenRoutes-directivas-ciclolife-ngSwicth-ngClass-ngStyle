import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private router:ActivatedRoute) {

    /*
    * this.router.parent.params.subscribe
    *
    * Con el parent, se obtienen el parmetro del padre
    * pruebas/10/a
    * */

    this.router.parent.params.subscribe(parametros => {
      console.log("RUTA HIJA DETALLE");
      console.log(parametros);
    });

  }

  ngOnInit() {
  }

}
