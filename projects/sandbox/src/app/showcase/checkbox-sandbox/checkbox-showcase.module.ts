import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CheckboxModule, IconModule } from '@zhannam85/ui-kit';

import { CheckboxShowcaseComponent } from './checkbox-showcase.component';

const routes: Routes = [
    { path: '', component: CheckboxShowcaseComponent },
];

@NgModule({
    declarations: [CheckboxShowcaseComponent],
    imports: [
        CommonModule,
        CheckboxModule,
        IconModule,
        RouterModule.forChild(routes),
    ],
})
export class CheckboxShowcaseModule {}
