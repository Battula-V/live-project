import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HomeService } from "../../home.service";
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  
  displayedColumns: string[] = ['country_id', 
  'country_name', 'country_code','country_phone_code','country_status'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  
  country :Array<any>=[];
  constructor(private home:HomeService) {
  }

  ngOnInit(): void {    

    this.home.getCountry().subscribe(
      (response:any)=>{
        console.log(response);
        this.country=response;
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.country); 
        //activate pagenation      
        this.dataSource.paginator = this.paginator;
        //activate sort
        this.dataSource.sort = this.sort;
      }
    )

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
