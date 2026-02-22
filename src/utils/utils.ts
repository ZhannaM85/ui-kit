import { KitNotification, NotificationOptions } from '../components/notification/notification.model';
import { DropdownOption } from '../components/dropdown/dropdown.model';

const DEFAULT_DURATION = 20000;

// --- ID generation ---

export function generateId(prefix: string, length = 9): string {
    return `${prefix}-${Math.random().toString(36).substring(2, 2 + length)}`;
}

// --- Notification helpers ---

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

// --- Dropdown helpers ---

export function findSelectedOption(options: DropdownOption[], value: unknown): DropdownOption | null {
    if (value === null || value === undefined) {
        return null;
    }
    return options.find(opt => opt.value === value) || null;
}

export function isActivationKey(key: string): boolean {
    return key === 'Enter' || key === ' ';
}
