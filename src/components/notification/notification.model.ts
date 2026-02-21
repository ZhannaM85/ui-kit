export type NotificationType = 'success' | 'warning' | 'error';

export interface KitNotification {
    id: string;
    message: string;
    type: NotificationType;
    duration: number;
}
