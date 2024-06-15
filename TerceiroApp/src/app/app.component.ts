import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from "./rodape/rodape.component";
import { HeaderComponent } from "./header/header.component";
import { LateralComponent } from "./lateral/lateral.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RodapeComponent, HeaderComponent, LateralComponent]
})
export class AppComponent {
  title = 'TerceiroApp';
}
