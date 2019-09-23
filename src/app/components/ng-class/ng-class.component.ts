import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html'
})
export class NgClassComponent implements OnInit {

  alerta:string = "alert-danger";
  alerta2:string = "";

  propiedades:Object = {
    danger: false
  }

  loading:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }


  procesoAsincrono() {

    this.loading = true;

    //en 3 segundos se cambiara el estado de la variable
    setTimeout(() => this.loading = false, 3000);

  }
}
