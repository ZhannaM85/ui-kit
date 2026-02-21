import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { KitNotification } from './notification.model';
import { NotificationService } from './notification.service';

@Component({
    selector: 'kit-notification-container',
    standalone: false,
    templateUrl: './notification-container.component.html',
    styleUrls: ['./notification-container.component.scss'],
})
export class NotificationContainerComponent implements OnInit, OnDestroy {
    public notifications: KitNotification[] = [];

    private subscription!: Subscription;

    constructor(private notificationService: NotificationService) {}

    public ngOnInit(): void {
        this.subscription = this.notificationService.notifications$.subscribe(
            (notifications) => (this.notifications = notifications)
        );
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public onDismiss(id: string): void {
        this.notificationService.dismiss(id);
    }

    public trackById(_index: number, notification: KitNotification): string {
        return notification.id;
    }
}
