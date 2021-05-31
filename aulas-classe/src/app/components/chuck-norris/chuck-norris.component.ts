import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/services/chuck.service';


@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {

  Chucks : ChuckService;
  constructor(private chuckService : ChuckService) {
    this.Chucks = chuckService;
  }

  ngOnInit(): void {
  }

  resultado : any;
   piada : string ="Espera pela piada";
   getJoke(){
     //this.piada = this.chuckService.piadadoServico;
      this.Chucks.getJoke().subscribe(data => {this.resultado=data;
      this.piada = this.resultado.value});
   }
   piadas: any;
  getMoreJokes(valoraPesquisar: string){
    this.chuckService.getJokeFromCat(valoraPesquisar).subscribe(data => {this.piadas = data});
  }
}
