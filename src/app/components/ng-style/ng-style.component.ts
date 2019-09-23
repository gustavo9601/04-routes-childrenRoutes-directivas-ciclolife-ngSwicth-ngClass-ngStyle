import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <h3>ngStyle</h3>
    <p [ngStyle]="{'font-size': size + 'px'}">
    Esto es una parrafo
  </p>
   <p [style.fontSize.px]="size">
    Esto es una parrafo
  </p>
   
   <button class="btn btn-primary" (click)="size = size + 5"><i class="fa fa-plus"></i></button>
   <button class="btn btn-danger" (click)="size = size - 5"><i class="fa fa-minus"></i></button>
   
  `
})
export class NgStyleComponent implements OnInit {

  size:number = 20;

  constructor() {
  }

  ngOnInit() {
  }

}
