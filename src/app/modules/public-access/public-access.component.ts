import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-public-access',
  templateUrl: './public-access.component.html',
  styleUrls: ['./public-access.component.scss']
})
export class PublicAccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(document).ready(function(){   
    //   /*****Fixed Menu******/
    //   var secondaryNav:any = $('.cd-secondary-nav'),
    //      secondaryNavTopPosition = secondaryNav.offset().top;
    //      let navbar_height:any = document.querySelector('.navbar')?.offsetHeight || null;
         
    //       $(window).on('scroll', function(){
    //           // if($(window).scrollTop() > secondaryNavTopPosition + navbar_height ) {
    //               secondaryNav.addClass('is-fixed');	
    //               document.body.style.paddingTop = navbar_height + 'px';
                  
    //           } else {
    //               secondaryNav.removeClass('is-fixed');
    //               document.body.style.paddingTop = '0'
    //           }
    //       });	
          
  //});
  }

}
