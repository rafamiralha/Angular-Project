import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RodapeComponent } from "../rodape/rodape.component";

class Contato {
  nome: string;
  email: string;

  constructor(nome: string = '', email: string = '') {
    this.nome = nome;
    this.email = email;
  }
}

const contatos:Array <Contato>=[];
@Component({
    selector: 'app-contatos',
    standalone: true,
    templateUrl: './contatos.component.html',
    styleUrl: './contatos.component.css',
    imports: [FormsModule, CommonModule, RodapeComponent]
})
export class ContatosComponent {
  nome: string = '';
  email: string = '';
  contato: Contato = new Contato();

  incluir(): void {
    contatos.push(this.contato);
    this.contato = new Contato();
  }

  getContatos = (): Array<Contato> => contatos;
}
