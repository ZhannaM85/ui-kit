import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', loadChildren: () => import('./showcase/welcome/welcome.module').then(m => m.WelcomeModule) },
    { path: 'button', loadChildren: () => import('./showcase/button-sandbox/button-showcase.module').then(m => m.ButtonShowcaseModule) },
    { path: 'dropdown', loadChildren: () => import('./showcase/dropdown-checkbox/dropdown-showcase.module').then(m => m.DropdownShowcaseModule) },
    { path: 'checkbox', loadChildren: () => import('./showcase/checkbox-sandbox/checkbox-showcase.module').then(m => m.CheckboxShowcaseModule) },
    { path: '**', redirectTo: 'welcome' },
];
