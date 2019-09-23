import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy

} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

    constructor() {
            console.log("Ejecutando el constructor");}

    ngOnInit() {
            console.log("Ejecutando el ngOnInit");}

    ngOnChanges() {
        console.log("Ejecutando el ngOnChanges");
    }

    ngDoCheck() {
        console.log("Ejecutando el ngDoCheck");
    }

    ngAfterContentInit() {
        console.log("Ejecutando el ngAfterContentInit");
    }

    ngAfterContentChecked() {
        console.log("Ejecutando el ngAfterContentChecked");
    }

    ngAfterViewInit() {
        console.log("Ejecutando el ngAfterViewInit");
    }

    ngAfterViewChecked() {
        console.log("Ejecutando el ngAfterViewChecked");
    }

    ngOnDestroy() {
        console.log("Ejecutando el ngOnDestroy");
    }


}
