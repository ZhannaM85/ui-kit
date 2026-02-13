import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'button', pathMatch: 'full' },
  { path: 'button', loadComponent: () => import('./showcase/button-sandbox/button-showcase.component').then(m => m.ButtonShowcaseComponent) },
  { path: 'dropdown', loadComponent: () => import('./showcase/dropdown-checkbox/dropdown-showcase.component').then(m => m.DropdownShowcaseComponent) },
  { path: 'checkbox', loadComponent: () => import('./showcase/checkbox-sandbox/checkbox-showcase.component').then(m => m.CheckboxShowcaseComponent) },
  { path: '**', redirectTo: 'button' },
];
