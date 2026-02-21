import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../icon/icon.module';
import { NotificationContainerComponent } from './notification-container.component';
import { NotificationItemComponent } from './notification-item.component';

@NgModule({
    declarations: [NotificationContainerComponent, NotificationItemComponent],
    imports: [CommonModule, IconModule],
    exports: [NotificationContainerComponent],
})
export class NotificationModule {}
