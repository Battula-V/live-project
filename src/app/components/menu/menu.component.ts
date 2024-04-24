import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  ngOnInit(): void {
    this.myEvent.emit("orey");
  }
  @Input() nickName="chintu";
  @Output() myEvent : EventEmitter<any> =new EventEmitter();

}
