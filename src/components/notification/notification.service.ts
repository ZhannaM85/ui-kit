import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { KitNotification, NotificationOptions, NotificationType } from './notification.model';
import { generateNotificationId, enforceMaxVisible, resolveDuration } from './notification.utils';

const MAX_VISIBLE = 5;

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private notifications: KitNotification[] = [];

    private notificationsSubject = new BehaviorSubject<KitNotification[]>([]);

    private timers = new Map<string, ReturnType<typeof setTimeout>>();

    private counter = 0;

    public notifications$: Observable<KitNotification[]> = this.notificationsSubject.asObservable();

    public show(message: string, type: NotificationType, options?: NotificationOptions): void {
        const duration = resolveDuration(options);
        const id = generateNotificationId(++this.counter);
        const notification: KitNotification = {
            id,
            message,
            type,
            duration,
            actionLabel: options?.actionLabel,
            actionCallback: options?.actionCallback,
        };

        this.notifications = [...this.notifications, notification];

        const { kept, removed } = enforceMaxVisible(this.notifications, MAX_VISIBLE);
        if (removed) {
            this.clearTimer(removed.id);
            this.notifications = kept;
        }

        this.notificationsSubject.next(this.notifications);

        if (duration > 0) {
            const timer = setTimeout(() => this.dismiss(id), duration);
            this.timers.set(id, timer);
        }
    }

    public success(message: string, options?: NotificationOptions): void {
        this.show(message, 'success', options);
    }

    public warning(message: string, options?: NotificationOptions): void {
        this.show(message, 'warning', options);
    }

    public error(message: string, options?: NotificationOptions): void {
        this.show(message, 'error', options);
    }

    public dismiss(id: string): void {
        this.clearTimer(id);
        this.notifications = this.notifications.filter((n) => n.id !== id);
        this.notificationsSubject.next(this.notifications);
    }

    private clearTimer(id: string): void {
        const timer = this.timers.get(id);
        if (timer) {
            clearTimeout(timer);
            this.timers.delete(id);
        }
    }
}
