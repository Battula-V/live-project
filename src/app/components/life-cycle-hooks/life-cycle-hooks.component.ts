import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DataSharingService } from "../data-sharing/data-sharing.service";
@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  name="safi";
  user(){
    this.name="ramu";
  }
  ngOnDestroy(): void {
   console.log(" ngOnDestroy - Just before the directive is destroyed.");
  }

  ngAfterViewChecked(): void {
    console.log(" ngAfterViewChecked - After every check of the views of a component.");
  }

  ngAfterViewInit(): void {
    console.log(" ngAfterViewInit - After the views of a component are initialized.");
  }

  ngAfterContentChecked(): void {
    console.log(" ngAfterContentChecked - After every check of component content.");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit - After component content initialized.");
  }

  ngDoCheck(): void {
    console.log(" ngDoCheck - Developer's custom change detection.");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(" ngOnChanges - When an input or output binding value changes.");
  }

  ngOnInit(): void {
    console.log(" ngOnInit - After the first ngOnChanges.");
  }

  constructor( private dataSharingSeriveObj :  DataSharingService ){
    this.dataSharingSeriveObj.applicationData.subscribe(
      (variableOne) => {
        console.log(variableOne);
      }
    );
  }

}
