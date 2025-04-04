import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MenubarModule,
    ButtonModule,
    CommonModule,
    AvatarModule,
    BadgeModule,
    InputTextModule,
    Ripple,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        url: '/',
      },
      {
        label: 'Menu',
        icon: 'pi pi-search',
        url: '/menu',
      },
    ];
  }

  navigateTo(url: string): void {
    this.router.navigate([url]); // Navigate to the specified URL
  }
}
