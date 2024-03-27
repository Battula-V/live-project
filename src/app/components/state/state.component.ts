import { Component, OnInit,ViewChild } from '@angular/core';
import { HomeService } from "../../home.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  displayedColumns :string[]=[
      'state_Id',
      'state_name',
      'state_status'
    ];
    dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  state :Array<any>=[];
  filteredStates:Array<any>=[];
  country:Array<any>=[];
  constructor(private home:HomeService) {

   }

  ngOnInit(): void {
    this.home.getState().subscribe(
      (response:any)=>{
        console.log(response);
        this.state=response;
        //assign
        this.dataSource=new MatTableDataSource(this.state);
         //activate     
         this.dataSource.paginator = this.paginator;
         //activate 
         this.dataSource.sort = this.sort;
      }
    );

    this.home.getCountry().subscribe(
      (country:any)=>{
        console.log(country);
        this.country=country;
      }
    )
    
  }

  getSelectedValue(event: any){
    console.log(event.value);
    let selectedCountry:number=event.value.country_id;
    console.log(selectedCountry);
    this.filteredStates=this.state.filter((response:any) => response.state_country_id==selectedCountry);    
    this.dataSource=new MatTableDataSource(this.filteredStates);
      //activate     
      this.dataSource.paginator = this.paginator;
      //activate 
      this.dataSource.sort = this.sort;
    console.log(this.filteredStates);
  }
  applyFilter(event: any) {
    //get value typed in the input tag
    let filterValue:any=event.target.value;
    console.log(filterValue);
    //filter table based on input filter value
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //update pagenation to first page
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
