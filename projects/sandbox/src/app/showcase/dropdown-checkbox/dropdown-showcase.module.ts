import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DropdownModule, IconModule } from '@zhannam85/ui-kit';

import { DropdownShowcaseComponent } from './dropdown-showcase.component';

const routes: Routes = [
    { path: '', component: DropdownShowcaseComponent },
];

@NgModule({
    declarations: [DropdownShowcaseComponent],
    imports: [
        CommonModule,
        DropdownModule,
        IconModule,
        RouterModule.forChild(routes),
    ],
})
export class DropdownShowcaseModule {}
