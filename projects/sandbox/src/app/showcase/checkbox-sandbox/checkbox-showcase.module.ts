import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CheckboxModule } from '@Zhannam85/ui-kit';

import { CheckboxShowcaseComponent } from './checkbox-showcase.component';

const routes: Routes = [
  { path: '', component: CheckboxShowcaseComponent },
];

@NgModule({
  declarations: [CheckboxShowcaseComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    RouterModule.forChild(routes),
  ],
})
export class CheckboxShowcaseModule {}
