import { Component, OnInit,ViewChild } from '@angular/core';
import { HomeService } from "../../home.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.scss']
})
export class VillageComponent implements OnInit {

  displayedColumns :string[]=[
    'village_id',
    'is_area',
    'village_name',
    'village_status'
  ];

  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  village:Array<any>=[];
  filteredVillage:Array<any>=[];
  mandal:Array<any>=[];
  constructor(private home:HomeService) {

   }

  ngOnInit(): void {
    this.home.getVillage().subscribe(
      (response:any)=>{
        console.log(response);
        this.village=response;
        this.dataSource=new MatTableDataSource(this.village);
         //activate     
         this.dataSource.paginator = this.paginator;
         //activate 
         this.dataSource.sort = this.sort;

      }
    );

    this.home.getMandal().subscribe(
      (response:any)=>{
        console.log(response);
        this.mandal=response;
      }
    )
  }
  
  getSelectedValue(event:any){
    console.log(event.value);
    let selectedMandal:number=event.value.mandal_id
    console.log(selectedMandal);
    this.filteredVillage=this.village.filter((response:any) => response. village_mandal_id==selectedMandal);    
    this.dataSource=new MatTableDataSource(this.filteredVillage);
         //activate     
         this.dataSource.paginator = this.paginator;
         //activate 
         this.dataSource.sort = this.sort;
    console.log(this.filteredVillage);
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
