import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownModule } from '@Zhannam85/ui-kit';

import { DropdownShowcaseComponent } from './dropdown-showcase.component';

const routes: Routes = [
  { path: '', component: DropdownShowcaseComponent },
];

@NgModule({
  declarations: [DropdownShowcaseComponent],
  imports: [
    DropdownModule,
    RouterModule.forChild(routes),
  ],
})
export class DropdownShowcaseModule {}
