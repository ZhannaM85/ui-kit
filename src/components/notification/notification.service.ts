import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { KitNotification, NotificationType } from './notification.model';

const DEFAULT_DURATION = 20000;
const MAX_VISIBLE = 5;

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private notifications: KitNotification[] = [];

    private notificationsSubject = new BehaviorSubject<KitNotification[]>([]);

    private timers = new Map<string, ReturnType<typeof setTimeout>>();

    private counter = 0;

    public notifications$: Observable<KitNotification[]> = this.notificationsSubject.asObservable();

    public show(
        message: string,
        type: NotificationType,
        duration: number = DEFAULT_DURATION,
        icon?: string,
    ): void {
        const id = `kit-notif-${++this.counter}`;
        const notification: KitNotification = { id, message, type, duration };

        this.notifications = [...this.notifications, notification];

        if (this.notifications.length > MAX_VISIBLE) {
            const removed = this.notifications[0];
            this.clearTimer(removed.id);
            this.notifications = this.notifications.slice(1);
        }

        this.notificationsSubject.next(this.notifications);

        if (duration > 0) {
            const timer = setTimeout(() => this.dismiss(id), duration);
            this.timers.set(id, timer);
        }
    }

    public success(message: string, duration?: number): void {
        this.show(message, 'success', duration);
    }

    public warning(message: string, duration?: number): void {
        this.show(message, 'warning', duration);
    }

    public error(message: string, duration?: number): void {
        this.show(message, 'error', duration);
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
