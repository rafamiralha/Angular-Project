import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nov-prod',
  standalone: true,
  imports: [],
  templateUrl: './nov-prod.component.html',
  styleUrl: './nov-prod.component.css'
})
export class NovProdComponent implements OnInit {
  router: Router;

  constructor(router: Router){this.router = router; }
  incluir():void{
    this.router.navigateByUrl("/produto")
    }
  ngOnInit(): void {

}
}
