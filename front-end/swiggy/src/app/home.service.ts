import { Injectable } from '@angular/core';

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

  constructor() { }
}
