import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonModule } from '@Zhannam85/ui-kit';

import { ButtonShowcaseComponent } from './button-showcase.component';

const routes: Routes = [
  { path: '', component: ButtonShowcaseComponent },
];

@NgModule({
  declarations: [ButtonShowcaseComponent],
  imports: [
    ButtonModule,
    RouterModule.forChild(routes),
  ],
})
export class ButtonShowcaseModule {}
