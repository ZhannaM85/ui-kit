import {
    generateId,
    generateNotificationId,
    enforceMaxVisible,
    resolveDuration,
    findSelectedOption,
    isActivationKey,
} from './utils';
import { KitNotification } from '../components/notification/notification.model';
import { DropdownOption } from '../components/dropdown/dropdown.model';

// --- generateId ---

describe('generateId', () => {
    it('should return a string starting with the given prefix', () => {
        const id = generateId('kit-input');
        expect(id.startsWith('kit-input-')).toBe(true);
    });

    it('should generate unique IDs on each call', () => {
        const ids = new Set(Array.from({ length: 100 }, () => generateId('test')));
        expect(ids.size).toBe(100);
    });

    it('should use the default length of 9 for the random part', () => {
        const id = generateId('prefix');
        const randomPart = id.replace('prefix-', '');
        expect(randomPart.length).toBeLessThanOrEqual(9);
        expect(randomPart.length).toBeGreaterThan(0);
    });

    it('should respect a custom length parameter', () => {
        const id = generateId('p', 5);
        const randomPart = id.replace('p-', '');
        expect(randomPart.length).toBeLessThanOrEqual(5);
        expect(randomPart.length).toBeGreaterThan(0);
    });

    it('should only contain alphanumeric characters in the random part', () => {
        const id = generateId('kit');
        const randomPart = id.replace('kit-', '');
        expect(randomPart).toMatch(/^[a-z0-9]+$/);
    });
});

// --- generateNotificationId ---

function createNotification(id: string): KitNotification {
    return { id, message: `msg-${id}`, type: 'success', duration: 5000 };
}

describe('generateNotificationId', () => {
    it('should produce an ID with the correct prefix and counter', () => {
        expect(generateNotificationId(1)).toBe('kit-notif-1');
        expect(generateNotificationId(42)).toBe('kit-notif-42');
    });
});

// --- enforceMaxVisible ---

describe('enforceMaxVisible', () => {
    it('should return all notifications when under the limit', () => {
        const notifications = [createNotification('1'), createNotification('2')];
        const result = enforceMaxVisible(notifications, 5);
        expect(result.kept).toEqual(notifications);
        expect(result.removed).toBeNull();
    });

    it('should return all notifications when at the limit', () => {
        const notifications = Array.from({ length: 5 }, (_, i) => createNotification(String(i)));
        const result = enforceMaxVisible(notifications, 5);
        expect(result.kept).toEqual(notifications);
        expect(result.removed).toBeNull();
    });

    it('should remove the first notification when over the limit', () => {
        const notifications = Array.from({ length: 6 }, (_, i) => createNotification(String(i)));
        const result = enforceMaxVisible(notifications, 5);
        expect(result.removed).toEqual(notifications[0]);
        expect(result.kept.length).toBe(5);
        expect(result.kept[0].id).toBe('1');
    });
});

// --- resolveDuration ---

describe('resolveDuration', () => {
    it('should return the default duration when no options are provided', () => {
        expect(resolveDuration()).toBe(20000);
    });

    it('should return the default duration when options have no duration', () => {
        expect(resolveDuration({})).toBe(20000);
    });

    it('should return the custom duration from options', () => {
        expect(resolveDuration({ duration: 3000 })).toBe(3000);
    });

    it('should return 0 when duration is explicitly 0', () => {
        expect(resolveDuration({ duration: 0 })).toBe(0);
    });

    it('should allow overriding the default duration', () => {
        expect(resolveDuration(undefined, 10000)).toBe(10000);
    });
});

// --- findSelectedOption ---

describe('findSelectedOption', () => {
    const options: DropdownOption[] = [
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three', value: 'three' },
    ];

    it('should return the matching option by value', () => {
        expect(findSelectedOption(options, 2)).toEqual({ label: 'Two', value: 2 });
    });

    it('should return null when value is null', () => {
        expect(findSelectedOption(options, null)).toBeNull();
    });

    it('should return null when value is undefined', () => {
        expect(findSelectedOption(options, undefined)).toBeNull();
    });

    it('should return null when no option matches', () => {
        expect(findSelectedOption(options, 999)).toBeNull();
    });

    it('should return null for an empty options array', () => {
        expect(findSelectedOption([], 1)).toBeNull();
    });

    it('should match string values correctly', () => {
        expect(findSelectedOption(options, 'three')).toEqual({ label: 'Three', value: 'three' });
    });
});

// --- isActivationKey ---

describe('isActivationKey', () => {
    it('should return true for Enter', () => {
        expect(isActivationKey('Enter')).toBe(true);
    });

    it('should return true for Space', () => {
        expect(isActivationKey(' ')).toBe(true);
    });

    it('should return false for other keys', () => {
        expect(isActivationKey('Tab')).toBe(false);
        expect(isActivationKey('Escape')).toBe(false);
        expect(isActivationKey('ArrowDown')).toBe(false);
        expect(isActivationKey('a')).toBe(false);
    });
});
