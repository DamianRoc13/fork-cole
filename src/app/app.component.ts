import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { BoodyComponent } from './boody/boody.component';
import { HeaderComponent } from './header/header.component';
import { InformationComponent } from './information/information.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, HeaderComponent, BoodyComponent, InformationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fork-cole';
}
