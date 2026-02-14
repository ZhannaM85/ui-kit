import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ButtonModule, IconModule } from '@zhannam85/ui-kit';

import { ButtonShowcaseComponent } from './button-showcase.component';

const routes: Routes = [
    { path: '', component: ButtonShowcaseComponent },
];

@NgModule({
    declarations: [ButtonShowcaseComponent],
    imports: [
        CommonModule,
        ButtonModule,
        IconModule,
        RouterModule.forChild(routes),
    ],
})
export class ButtonShowcaseModule {}
