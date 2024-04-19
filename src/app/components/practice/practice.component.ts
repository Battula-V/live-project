import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit , OnChanges , DoCheck , AfterViewInit , AfterContentInit ,AfterContentChecked, AfterViewChecked , OnDestroy{
  ramu="Good Boy";
  user(){
    this.ramu='studying';
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterContentChecked(): void {
   console.log("ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
