import { Component } from '@angular/core';

@Component({
  selector: 'app-my-functions',
  templateUrl: './my-functions.component.html',
  styleUrls: ['./my-functions.component.scss']
})
export class MyFunctionsComponent {
    snippet=`
    function functionName(){

      set of statements;

    }`;
    bracket=`{ }`;
    snippet1=`
    functionName(){

      set of statements;

    }`;
    type1Syntax=`
    functionName(){

      set of statements;

    }`;
    type1Example=`
    addTwoNumbers(){
      let a=23;
      let b=45;
      let c=a+b;
      console.log(c);
    }`;
    type1CallingSyntax=`
    functionName();`;
    type1CallingExample=`
    addTwoNumbers();`;

    type2Syntax=`
    functionName(param-1, param-2, ........, param-n){

      set of statements;

      return value;

    }`;
    type2Example=`
    addTwoNumbers(a,b){
      let c=a+b;

     return c;

    }`;
    
    type2CallingSyntax=`
    let output=functionName(param-1, param-2, ........, param-n);`;
    type2CallingExample=`
    let result=addTwoNumbers(23 , 45);`;


    type3Syntax=`
    functionName(){

      set of statements;

      return value;

    }`;
    type3Example=`
    addTwoNumbers(){
      let a=23;
      let b=45;
      let c=a+b;

     return c;

    }`;
    
    type3CallingSyntax=`
    let output=functionName();`;
    type3CallingExample=`
    let result=addTwoNumbers();`;

    type4Syntax=`
    functionName(param-1, param-2, ........, param-n){

      set of statements;


    }`;
    type4Example=`
    addTwoNumbers(a,b){

      let c=a+b;
      console.log(c);
     

    }`;
    
    type4CallingSyntax=`
    functionName(param-1, param-2, ........, param-n);`;
    type4CallingExample=`
    addTwoNumbers(23 , 45);`;

}
