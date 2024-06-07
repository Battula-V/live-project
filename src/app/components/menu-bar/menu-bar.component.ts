import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  ngOnInit(){
    this.myEvent.emit("akbar");
    this.myEvent.emit("guntur");
  }


  @Input() mandalName="karempudi";
  @Input() hostelName='omsri';
  @Output() myEvent:EventEmitter<any>=new EventEmitter();
}
