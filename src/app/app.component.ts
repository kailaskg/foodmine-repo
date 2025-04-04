import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'foodmine';
}
