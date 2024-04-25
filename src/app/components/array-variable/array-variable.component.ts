import { Component } from '@angular/core';

@Component({
  selector: 'app-array-variable',
  templateUrl: './array-variable.component.html',
  styleUrls: ['./array-variable.component.scss']
})
export class ArrayVariableComponent {
  myHouses : Array<string> = ["chinthapalli" , "janapadu" ,"karempudi" , "macherla"];
  myHousesOne : Array<any> = ["chinthapalli" , "janapadu", "macherla" ,"karempudi" , 4, 5];
  myLuckyNumbers : Array<number>= [2, 3,56,87];
  myOpinions : Array<boolean> = [ true , false];

}
