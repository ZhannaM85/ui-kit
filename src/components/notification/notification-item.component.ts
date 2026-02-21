import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KitNotification } from './notification.model';

@Component({
    selector: 'kit-notification',
    standalone: false,
    templateUrl: './notification-item.component.html',
    styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent {
    @Input() public notification!: KitNotification;

    @Output() public dismissed = new EventEmitter<string>();

    public onDismiss(): void {
        this.dismissed.emit(this.notification.id);
    }
}
