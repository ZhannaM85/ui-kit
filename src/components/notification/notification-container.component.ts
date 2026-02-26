/* eslint-disable @angular-eslint/prefer-inject */
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { KitNotification } from './notification.model';
import { NotificationService } from './notification.service';

@Component({
    selector: 'kit-notification-container',
    standalone: false,
    templateUrl: './notification-container.component.html',
    styleUrls: ['./notification-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationContainerComponent implements OnInit, OnDestroy {
    public notifications: KitNotification[] = [];

    private subscription!: Subscription;

    constructor(
        private notificationService: NotificationService,
        private cdr: ChangeDetectorRef,
    ) {}

    /**
     * Subscribes to notification stream and triggers view updates.
     */
    public ngOnInit(): void {
        this.subscription = this.notificationService.notifications$.subscribe(
            (notifications) => {
                this.notifications = notifications;
                this.cdr.detectChanges();
            }
        );
    }

    /**
     * Cleans up notification stream subscription.
     */
    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    /**
     * Dismisses a notification by id.
     *
     * @param id Notification identifier.
     */
    public onDismiss(id: string): void {
        this.notificationService.dismiss(id);
    }

    /**
     * TrackBy function that returns notification id.
     *
     * @param _index Rendered item index.
     * @param notification Notification item.
     * @returns Stable notification id.
     */
    public trackById(_index: number, notification: KitNotification): string {
        return notification.id;
    }
}
