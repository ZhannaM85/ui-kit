import { KitNotification, NotificationOptions } from '../components/notification/notification.model';
import { DropdownOption } from '../components/dropdown/dropdown.model';

const DEFAULT_DURATION = 20000;

// --- ID generation ---

/**
 * Generates a random id with the provided prefix.
 *
 * @param prefix Prefix for generated id.
 * @param length Random suffix length.
 * @returns Generated id string.
 */
export function generateId(prefix: string, length = 9): string {
    return `${prefix}-${Math.random().toString(36).substring(2, 2 + length)}`;
}

// --- Notification helpers ---

/**
 * Generates a stable notification id from a numeric counter.
 *
 * @param counter Incremental notification counter.
 * @returns Notification id string.
 */
export function generateNotificationId(counter: number): string {
    return `kit-notif-${counter}`;
}

/**
 * Keeps only `maxVisible` notifications and returns any removed item.
 *
 * @param notifications Current notification list.
 * @param maxVisible Maximum allowed visible notifications.
 * @returns Kept list and optionally removed notification.
 */
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

/**
 * Resolves effective notification duration from options/default.
 *
 * @param options Optional notification options.
 * @param defaultDuration Default duration in milliseconds.
 * @returns Effective duration in milliseconds.
 */
export function resolveDuration(options?: NotificationOptions, defaultDuration = DEFAULT_DURATION): number {
    return options?.duration ?? defaultDuration;
}

// --- Dropdown helpers ---

/**
 * Finds selected option by comparing option value with provided value.
 *
 * @param options Available dropdown options.
 * @param value Selected value candidate.
 * @returns Matching option or `null`.
 */
export function findSelectedOption(options: DropdownOption[], value: unknown): DropdownOption | null {
    if (value === null || value === undefined) {
        return null;
    }
    return options.find(opt => opt.value === value) || null;
}

/**
 * Checks whether keyboard key should activate a control.
 *
 * @param key Keyboard event key.
 * @returns `true` for Enter and Space keys.
 */
export function isActivationKey(key: string): boolean {
    return key === 'Enter' || key === ' ';
}
