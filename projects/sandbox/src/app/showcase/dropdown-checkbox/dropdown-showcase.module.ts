import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DropdownModule } from '@Zhannam85/ui-kit';

import { DropdownShowcaseComponent } from './dropdown-showcase.component';

const routes: Routes = [
    { path: '', component: DropdownShowcaseComponent },
];

@NgModule({
    declarations: [DropdownShowcaseComponent],
    imports: [
        CommonModule,
        DropdownModule,
        RouterModule.forChild(routes),
    ],
})
export class DropdownShowcaseModule {}
