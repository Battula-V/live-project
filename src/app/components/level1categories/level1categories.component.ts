import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../home.service";
@Component({
  selector: 'app-level1categories',
  templateUrl: './level1categories.component.html',
  styleUrls: ['./level1categories.component.scss']
})
export class Level1categoriesComponent implements OnInit {
  level1Categories:Array<any>=[];
  constructor(private home:HomeService) {
    //this.level1Categories=home.level1Categories
    console.log(this.level1Categories);
   }

  ngOnInit(): void {
    this.home.getLevel1Categories().subscribe(
      (response:any)=>{
        console.log(response);
      }
    );
  }

}
