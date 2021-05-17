import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cor : string ="red";

changeColor(corR: string)
{
  this.cor=corR;
}

contarInput : number =0;
contarCores : number =0;
tamanho : number =15;

arrayFrases : Array<string> = ["Mudou o Input","Outra vez","3 vezes","Não tens mais nada que fazer"];
arrayCores : Array<string> = ["green","blue","purple","red"];
changeInput(referencia: any)
{
  console.log(referencia.value);
  referencia.value=this.arrayFrases[this.contarInput]?this.arrayFrases[this.contarInput]:"ja carregas-te demasiadas vezes";
  this.contarInput +=1;
}
changeCor(referencia: HTMLElement)
{
  referencia.style.backgroundColor=this.arrayCores[this.contarCores]?this.arrayCores[this.contarCores]:"ja carregas-te demasiadas vezes";
  this.contarCores +=1;
}

aumentarTamanho(referencia:HTMLElement)
{
    referencia.style.height = this.tamanho + "px";
    this.tamanho *=2;
}

}
