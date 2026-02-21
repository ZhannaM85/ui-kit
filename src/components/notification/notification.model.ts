export type NotificationType = 'success' | 'warning' | 'error';

export interface NotificationOptions {
    duration?: number;
    actionLabel?: string;
    actionCallback?: () => void;
}

export interface KitNotification {
    id: string;
    message: string;
    type: NotificationType;
    duration: number;
    actionLabel?: string;
    actionCallback?: () => void;
}
