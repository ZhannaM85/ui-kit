import { KitNotification, NotificationOptions } from './notification.model';

const DEFAULT_DURATION = 20000;

export function generateNotificationId(counter: number): string {
    return `kit-notif-${counter}`;
}

export function enforceMaxVisible(
    notifications: KitNotification[],
    maxVisible: number,
): { kept: KitNotification[]; removed: KitNotification | null } {
    if (notifications.length > maxVisible) {
        return {
            removed: notifications[0],
            kept: notifications.slice(1),
        };
    }
    return { kept: notifications, removed: null };
}

export function resolveDuration(options?: NotificationOptions, defaultDuration = DEFAULT_DURATION): number {
    return options?.duration ?? defaultDuration;
}
