import { generateNotificationId, enforceMaxVisible, resolveDuration } from './notification.utils';
import { KitNotification } from './notification.model';

function createNotification(id: string): KitNotification {
    return { id, message: `msg-${id}`, type: 'success', duration: 5000 };
}

describe('generateNotificationId', () => {
    it('should produce an ID with the correct prefix and counter', () => {
        expect(generateNotificationId(1)).toBe('kit-notif-1');
        expect(generateNotificationId(42)).toBe('kit-notif-42');
    });
});

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
