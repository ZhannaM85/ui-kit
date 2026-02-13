import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonComponent } from '@Zhannam85/ui-kit';

import { ButtonShowcaseComponent } from './button-showcase.component';

const routes: Routes = [
  { path: '', component: ButtonShowcaseComponent },
];

@NgModule({
  declarations: [ButtonShowcaseComponent],
  imports: [
    ButtonComponent,
    RouterModule.forChild(routes),
  ],
})
export class ButtonShowcaseModule {}
