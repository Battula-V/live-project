import { Component } from '@angular/core';

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
  styleUrls: ['./my-class.component.scss']
})
export class MyClassComponent {
  snippet=`
    class className{

      Variables;
      functions;

    }`;

    bracket=`{ }`;

    writingClassSyntax=`
    class className{

            // Below are the variables 

            variable1=value1;
            variable2=value2;
            .
            .
            .
            .
            variableN=valueN;

            // Below are the functions

            functionName1(){
              set of statements;
            }
            functionName2(){
              set of statements;
            }
            .
            .
            .
            functionNameN(){
              set of statements;
            }


    }
    `;

    writingClassExample=`
    class Calculations{

            a=25;
            b=36;
            
            addition(){
              c=a+b;
              console.log(c);
            }

            subtraction(){
              d=a-b;
              console.log(d);
            }

            multiplication(){
              e=a*b;
              console.log(e);
            }

            division(){
              f=a/b;
              console.log(f);
            }

            
    }
    `;

}
