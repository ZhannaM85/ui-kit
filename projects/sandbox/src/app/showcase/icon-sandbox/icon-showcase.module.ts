import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IconModule } from '@zhannam85/ui-kit';

import { IconShowcaseComponent } from './icon-showcase.component';

const routes: Routes = [
    { path: '', component: IconShowcaseComponent },
];

@NgModule({
    declarations: [IconShowcaseComponent],
    imports: [
        CommonModule,
        FormsModule,
        IconModule,
        RouterModule.forChild(routes),
    ],
})
export class IconShowcaseModule {}
