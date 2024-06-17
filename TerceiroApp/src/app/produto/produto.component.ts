import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LateralComponent } from "../lateral/lateral.component";
@Component({
    selector: 'app-produto',
    standalone: true,
    templateUrl: './produto.component.html',
    styleUrl: './produto.component.css',
    imports: [LateralComponent]
})
export class ProdutoComponent implements OnInit{
  pagina: string = "Listagem de Produtos";
  router: Router;
  constructor(router:Router){this.router = router;}

  incluir():void{
    this.router.navigateByUrl("/novoprod")

  }
  excluir(codigo: string):void{}

  ngOnInit(): void {

  }
}
