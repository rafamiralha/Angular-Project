import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
title = 'TerceiroAPP';
}
