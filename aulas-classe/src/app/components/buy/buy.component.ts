import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/classes/artigo';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  listaService : ListaService;
  constructor(private lista: ListaService) {
    this.listaService = lista;
  }

  ngOnInit(): void {
  }
  Comprar(artigo : Artigo)
  {
    artigo.carrinho = true;
    console.log("Artigo:",artigo);
  }

}
