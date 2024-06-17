import { Component } from '@angular/core';
import { RodapeComponent } from "../rodape/rodape.component";
import '../rodape/rodape.component.css'
import { LateralComponent } from "../lateral/lateral.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RodapeComponent, LateralComponent]
})
export class HomeComponent {
  pagina: string = "Home";
}
