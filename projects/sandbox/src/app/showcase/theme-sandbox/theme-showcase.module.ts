import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    InputModule,
    TextareaModule,
    IconModule,
} from '@zhannam85/ui-kit';

import { ThemeShowcaseComponent } from './theme-showcase.component';

const routes: Routes = [
    { path: '', component: ThemeShowcaseComponent },
];

@NgModule({
    declarations: [ThemeShowcaseComponent],
    imports: [
        CommonModule,
        ButtonModule,
        DropdownModule,
        CheckboxModule,
        InputModule,
        TextareaModule,
        IconModule,
        RouterModule.forChild(routes),
    ],
})
export class ThemeShowcaseModule {}
