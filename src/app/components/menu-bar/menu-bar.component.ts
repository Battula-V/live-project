import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit{
  ngOnInit(): void {
    this.myEvent.emit("ramu");
  }
  @Input() hostelName="omsri";
  @Output() myEvent : EventEmitter<any> = new EventEmitter;

} 
