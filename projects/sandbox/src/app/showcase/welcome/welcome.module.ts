import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IconModule } from '@zhannam85/ui-kit';

import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
];

@NgModule({
    declarations: [WelcomeComponent],
    imports: [
        CommonModule,
        IconModule,
        RouterModule.forChild(routes),
    ],
})
export class WelcomeModule {}
