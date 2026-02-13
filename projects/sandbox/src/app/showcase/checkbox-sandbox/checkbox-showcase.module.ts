import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckboxComponent } from '@Zhannam85/ui-kit';

import { CheckboxShowcaseComponent } from './checkbox-showcase.component';

const routes: Routes = [
  { path: '', component: CheckboxShowcaseComponent },
];

@NgModule({
  declarations: [CheckboxShowcaseComponent],
  imports: [
    CheckboxComponent,
    RouterModule.forChild(routes),
  ],
})
export class CheckboxShowcaseModule {}
