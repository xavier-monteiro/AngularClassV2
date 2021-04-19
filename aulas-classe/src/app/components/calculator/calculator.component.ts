import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  number1 : number=0;
  number2 : number=0;
  result : number=0;
  sinal : string="+";

  soma(){

    switch(this.sinal)
    {
      case "+":
        this.result = Number(this.number1)+Number(this.number2);
        break;
      case "-":
        this.result = Number(this.number1)-Number(this.number2);
        break;
      case "*":
        this.result = Number(this.number1)*Number(this.number2);
        break;
      case "/":
        this.result = Number(this.number1)/Number(this.number2);
        break;


        default:
          this.result = Number(this.number1)+Number(this.number2);
          break;
    }
  }

}
