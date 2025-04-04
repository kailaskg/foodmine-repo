import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
