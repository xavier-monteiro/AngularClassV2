import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { BuyComponent } from './components/buy/buy.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { SColorComponent } from './components/p-color/s-color/s-color.component';
import { Pag404Component } from './components/pag404/pag404.component';


const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "home",component: HomeComponent},
  {path: "calculator", component: CalculatorComponent},
  {path: "compras", component: ListaComprasComponent,children: [{path: "add",component: AddComponent},{path:"buy",component: BuyComponent}]},
  {path: "p-color", component: PColorComponent, children:[{path:":color",component: SColorComponent}]},
  {path: "notFound",component: Pag404Component},
  {path: "**", redirectTo: "notFound"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
