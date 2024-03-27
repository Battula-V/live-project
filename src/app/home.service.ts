// list of api's
// https://documenter.getpostman.com/view/33164490/2sA2rCTgGp

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  restaurants:Array<any>=[
    {
      title:'Shiba Inu',
      subtitle:'Dog Breed',
      image:'assets/images/slide-1.jpg',
      content:'this restaurant'
    },
    {
      title:'Shiba Inu-1',
      subtitle:'Dog Breed',
      image:'assets/images/slide-2.webp',
      content:'this restaurant'
    },
    {
      // title:'Shiba Inu-2',
      subtitle:'Dog Breed',
      image:'assets/images/slide-3.jpg',
      content:'this restaurant'
    },
    {
      title:'Shiba Inu-31',
      subtitle:'Dog Breed',
      // image:'assets/images/slide-4.webp',
      content:'this restaurant'
    },
    {
      title:'Shiba Inu-4',
      subtitle:'Dog Breed',
      image:'assets/images/slide-5.jpg',
      content:'this restaurant'
    },
    {
      title:'Shiba Inu-5',
      subtitle:'Dog Breed',
      image:'assets/images/slide-1.jpg',
      content:'this restaurant'
    },
    {
      title:'Shiba Inu-6',
      subtitle:'Dog Breed',
      image:'assets/images/slide-2.webp',
      content:'this restaurant'
    },
    {
      title:'Shiba Inu-7',
      subtitle:'Dog Breed',
      image:'assets/images/slide-3.jpg',
      content:'this restaurant'
    },
    {
      title:'Shiba Inu-8',
      subtitle:'Dog Breed',
      image:'assets/images/slide-2.webp',
      content:'this restaurant'
    },
    {
      title:'Shiba Inu-9',
      subtitle:'Dog Breed',
      image:'assets/images/slide-3.jpg',
      content:'this restaurant'
    },
    
  ];
  //level1Categories:Array<any>=[];
  
  //country :Array<any>=[];

  constructor(private http:HttpClient) {
    
   }
  getRestaurants(){
    return this.http.get("http://127.0.0.1:8000/api/get-restaurants");
  }
  getLevel1Categories(){
    return this.http.get("http://127.0.0.1:8000/api/get-level1Categories");
  }
  getCountry(){
    return this.http.get("http://127.0.0.1:8000/api/get-countries");
  }
  getState(){
    return this.http.get("http://127.0.0.1:8000/api/get-states");
  }
  getDistrict(){
    return this.http.get("http://127.0.0.1:8000/api/get-districts");
  }
  getMandal(){
    return this.http.get("http://127.0.0.1:8000/api/get-mandals");
  }
  getVillage(){
    return this.http.get("http://127.0.0.1:8000/api/get-villages");
  }
}
