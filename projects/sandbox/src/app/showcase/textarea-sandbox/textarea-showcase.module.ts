import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TextareaModule, IconModule } from '@zhannam85/ui-kit';

import { TextareaShowcaseComponent } from './textarea-showcase.component';

const routes: Routes = [
    { path: '', component: TextareaShowcaseComponent },
];

@NgModule({
    declarations: [TextareaShowcaseComponent],
    imports: [
        CommonModule,
        FormsModule,
        TextareaModule,
        IconModule,
        RouterModule.forChild(routes),
    ],
})
export class TextareaShowcaseModule {}
