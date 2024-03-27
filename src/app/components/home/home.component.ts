import { Component } from '@angular/core';
import { HomeService } from "../../home.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imageObject: Array<object> = [
    {
      image: 'assets/images/slide-1.jpg',
      thumbImage: 'assets/images/slide-1.jpg',
      alt: 'alt of image',
    }, 
    {
      image: 'assets/images/slide-2.webp',
      thumbImage: 'assets/images/slide-2.webp',
      alt: 'alt of image',
    }, 
    {
      image: 'assets/images/slide-3.jpg',
      thumbImage: 'assets/images/slide-3.jpg',
      alt: 'alt of image',
    }, 
    {
      image: 'assets/images/slide-4.webp',
      thumbImage: 'assets/images/slide-4.webp',
      alt: 'alt of image',
    }, 
    {
      image: 'assets/images/slide-5.jpg',
      thumbImage: 'assets/images/slide-5.jpg',
      alt: 'alt of image',
    }
  ];
  restaurants:Array<any>=[];
  constructor(private home:HomeService){
    // this.restaurants=home.restaurants;
    console.log(this.restaurants);
  }
  ngOnInIt(){
    this.home.getRestaurants().subscribe(
      (response:any)=>{
        console.log(response);
      }
    );
  }
}
