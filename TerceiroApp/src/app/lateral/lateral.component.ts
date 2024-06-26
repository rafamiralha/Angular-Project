import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateral',
  standalone: true,
  imports: [],
  templateUrl: './lateral.component.html',
  styleUrl: './lateral.component.css'
})
export class LateralComponent implements OnInit{
@Input() pagina: string = "indefinida"
acesso: string = ""
page: string = ""

constructor() {}

addZero = (x:number) => (x>9) ? `${x}`:`0${x}`;

formataData(d:Date): string {
  let dataStr = "";
  dataStr += this.addZero(d.getDate())+"/"+ this.addZero(d.getMonth()+1)+"/"+d.getFullYear()+" "
  +this.addZero(d.getHours())+":"+this.addZero(d.getMinutes())+":"+this.addZero(d.getSeconds());
  return dataStr;
}
ngOnInit(): void {
  this.page = `${this.pagina}`;
  let d: Date = new Date();
  this.acesso = this.formataData(d);
  }

}
