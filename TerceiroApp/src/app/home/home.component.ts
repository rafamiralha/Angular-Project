import { Component } from '@angular/core';
import { RodapeComponent } from "../rodape/rodape.component";
import '../rodape/rodape.component.css'
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RodapeComponent]
})
export class HomeComponent {

}
