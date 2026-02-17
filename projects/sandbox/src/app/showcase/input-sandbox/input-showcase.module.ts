import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { InputModule, IconModule } from '@zhannam85/ui-kit';

import { InputShowcaseComponent } from './input-showcase.component';

const routes: Routes = [
    { path: '', component: InputShowcaseComponent },
];

@NgModule({
    declarations: [InputShowcaseComponent],
    imports: [
        CommonModule,
        FormsModule,
        InputModule,
        IconModule,
        RouterModule.forChild(routes),
    ],
})
export class InputShowcaseModule {}
