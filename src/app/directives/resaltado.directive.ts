import { Directive, ElementRef, HostListener, Input } from '@angular/core';


/*
* Una directiva es crear una propieda
* o atributo adicional a algun elemento del html
* */


@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  //Cremoas un objeto provado de ElementRef, para poder
  //Hacer referencia al elemento que invoque esta directiva
  constructor(private elemento:ElementRef) {

    console.log("Directiva llamada");

    //Colocara el elemento con backgroun amarillo
    elemento.nativeElement.style.backgroundColor = "yellow";

  }


  /*
  *  @Input("appResultado") nuevoColor:string;
  *  Utilizamos el injector input
  *  para que la directiva pueda recibir parametros
  *  para este caso recibira el color a cargar
  *
  * */
  @Input("appResaltado") nuevoColor:string;


  //COn el hostlistener, pasando el parametro de envento
  //Estara escuchando el evento del elemento html que contenga esta Directiva
  @HostListener('mouseenter') mouseEntro(){

    this.elemento.nativeElement.style.backgroundColor = "green";
    console.log(this.nuevoColor);



    //Si no se pasa color, se pasara yellow
    this.resaltar(this.nuevoColor || 'yellow');

  }

  @HostListener('mouseleave') mouseSalio(){
    this.elemento.nativeElement.style.backgroundColor = "yellow";
  }


  private resaltar(color:string){
    this.elemento.nativeElement.style.backgroundColor = color;
  }

}
