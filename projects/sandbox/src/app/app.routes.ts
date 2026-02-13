import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'button', pathMatch: 'full' },
  { path: 'button', loadComponent: () => import('./showcase/button-showcase.component').then(m => m.ButtonShowcaseComponent) },
  { path: 'dropdown', loadComponent: () => import('./showcase/dropdown-showcase.component').then(m => m.DropdownShowcaseComponent) },
  { path: 'checkbox', loadComponent: () => import('./showcase/checkbox-showcase.component').then(m => m.CheckboxShowcaseComponent) },
  { path: '**', redirectTo: 'button' },
];
