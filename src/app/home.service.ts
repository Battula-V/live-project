import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  restaurants:Array<any>=
  [
    {
        title:'Shiba Inu-1',
        subtitle:'Dog Breed',
        image:'assets/images/slide-1.jpg',
        content:'This restaurant is a famous'
    },
    {
        title:'Shiba Inu-258',
        subtitle:'Dog Breed',
        image:'assets/images/slide-2.webp',
        content:'This restaurant is a famous'
    },
    {
        title:'Shiba Inu-31',
        subtitle:'Dog Breed',
        image:'assets/images/slide-3.jpg',
        content:'This restaurant is a famous'
    },
    {
        title:'Shiba Inu-4',
        subtitle:'Dog Breed',
        image:'assets/images/slide-4.webp',
        content:'This restaurant is a famous'
    },
    {
        title:'Shiba Inu-5',
        subtitle:'Dog Breed',
        image:'assets/images/slide-5.jpg',
        content:'This restaurant is a famous'
    },
    {
        title:'Shiba Inu-6',
        subtitle:'Dog Breed',
        image:'assets/images/slide-1.jpg',
        content:'This restaurant is a famous'
    },
    {
        title:'Shiba Inu-7',
        subtitle:'Dog Breed',
        image:'assets/images/slide-2.webp',
        content:'This restaurant is a famous'
    },
    {
        title:'Shiba Inu-8',
        subtitle:'Dog Breed',
        image:'assets/images/slide-3.jpg',
        content:'This restaurant is a famous'
    },
    {
        title:'Shiba Inu-9',
        subtitle:'Dog Breed',
        image:'assets/images/slide-4.webp',
        content:'This restaurant is a famous'
    },
    {
        title:'Shiba Inu-10',
        subtitle:'Dog Breed',
        image:'assets/images/slide-5.jpg',
        content:'This restaurant is a famous'
    },    
];
constructor(private http:HttpClient){
  
}
getRestaurants(){
  return this.http.get("http://127.0.0.1:8000/api/get-restaurants");
}
}
