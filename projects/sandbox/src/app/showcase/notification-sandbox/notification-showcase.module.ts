import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ButtonModule, IconModule, NotificationModule } from '@zhannam85/ui-kit';

import { NotificationShowcaseComponent } from './notification-showcase.component';

const routes: Routes = [
    { path: '', component: NotificationShowcaseComponent },
];

@NgModule({
    declarations: [NotificationShowcaseComponent],
    imports: [
        CommonModule,
        ButtonModule,
        IconModule,
        NotificationModule,
        RouterModule.forChild(routes),
    ],
})
export class NotificationShowcaseModule {}
