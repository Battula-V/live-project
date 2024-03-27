import { Component, OnInit,ViewChild } from '@angular/core';
import { HomeService } from "../../home.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {

  displayedColumns :string[]=[
    'district_id',
    'is_city',
    'district_name',
    'district_status'
  ];
  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  district:Array<any>=[];
  filteredDistrict:Array<any>=[];
  state:Array<any>=[];
  

  constructor(private home:HomeService) {

   }

  ngOnInit(): void {
    this.home.getDistrict().subscribe(
      (response:any)=>{
        console.log(response);
        this.district=response;
        this.dataSource=new MatTableDataSource(this.district);
         //activate     
         this.dataSource.paginator = this.paginator;
         //activate 
         this.dataSource.sort = this.sort;
      }
    );

    this.home.getState().subscribe(
      (response:any)=>{
        console.log(response);
        this.state=response;
      }
    )
  }

  getSelectedValue(event:any){
    console.log(event.value);
    let selectedState:number=event.value.state_id;
    console.log(selectedState);
    this.filteredDistrict=this.district.filter((response:any)=>response.district_state_id==selectedState);
    this.dataSource=new MatTableDataSource(this.filteredDistrict);
      //activate     
      this.dataSource.paginator = this.paginator;
      //activate 
      this.dataSource.sort = this.sort;
    console.log(this.filteredDistrict);
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
