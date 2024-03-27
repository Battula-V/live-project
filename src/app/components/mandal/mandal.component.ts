import { Component, OnInit,ViewChild } from '@angular/core';
import { HomeService } from "../../home.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'
@Component({
  selector: 'app-mandal',
  templateUrl: './mandal.component.html',
  styleUrls: ['./mandal.component.scss']
})
export class MandalComponent implements OnInit {


  
  displayedColumns :string[]=[
    'mandal_id',
    'is_town',
    'mandal_name',
    'mandal_status'
  ];
  
  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  mandal:Array<any>=[];
  filteredMandal:Array<any>=[];
  district:Array<any>=[];
  constructor(private home:HomeService) { 

  }

  ngOnInit(): void {
    this.home.getMandal().subscribe(
      (response:any)=>{
        console.log(response);
        this.mandal=response;
        this.dataSource=new MatTableDataSource(this.mandal);
         //activate     
         this.dataSource.paginator = this.paginator;
         //activate 
         this.dataSource.sort = this.sort;

      }
    );

    this.home.getDistrict().subscribe(
      (response:any)=>{
        console.log(response);
        this.district=response;
      }
    )
  }

  getSelectedValue(event:any){
    console.log(event.value);
    let selectedDistrict=event.value.district_id;
    console.log(selectedDistrict);
    this.filteredMandal=this.mandal.filter((response:any)=>response.mandal_district_id==selectedDistrict);
    this.dataSource=new MatTableDataSource(this.filteredMandal);
      //activate     
      this.dataSource.paginator = this.paginator;
      //activate 
      this.dataSource.sort = this.sort;
    console.log(this.filteredMandal);
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
