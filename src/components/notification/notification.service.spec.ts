import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { KitNotification } from './notification.model';

describe('NotificationService', () => {
    let service: NotificationService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NotificationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should emit a notification when show is called', (done) => {
        service.notifications$.subscribe((notifications) => {
            if (notifications.length === 1) {
                expect(notifications[0].message).toBe('Test');
                expect(notifications[0].type).toBe('success');
                done();
            }
        });
        service.show('Test', 'success');
    });

    it('should use default duration when no options provided', (done) => {
        service.notifications$.subscribe((notifications) => {
            if (notifications.length === 1) {
                expect(notifications[0].duration).toBe(20000);
                done();
            }
        });
        service.show('Test', 'success');
    });

    it('should use custom duration from options', (done) => {
        service.notifications$.subscribe((notifications) => {
            if (notifications.length === 1) {
                expect(notifications[0].duration).toBe(5000);
                done();
            }
        });
        service.show('Test', 'success', { duration: 5000 });
    });

    it('should provide convenience method success()', (done) => {
        service.notifications$.subscribe((notifications) => {
            if (notifications.length === 1) {
                expect(notifications[0].type).toBe('success');
                done();
            }
        });
        service.success('OK');
    });

    it('should provide convenience method warning()', (done) => {
        service.notifications$.subscribe((notifications) => {
            if (notifications.length === 1) {
                expect(notifications[0].type).toBe('warning');
                done();
            }
        });
        service.warning('Warn');
    });

    it('should provide convenience method error()', (done) => {
        service.notifications$.subscribe((notifications) => {
            if (notifications.length === 1) {
                expect(notifications[0].type).toBe('error');
                done();
            }
        });
        service.error('Err');
    });

    it('should dismiss a notification by ID', () => {
        service.show('A', 'success', { duration: 0 });
        service.show('B', 'success', { duration: 0 });

        let latest: KitNotification[] = [];
        service.notifications$.subscribe((n) => (latest = n));

        const idToRemove = latest[0].id;
        service.dismiss(idToRemove);
        expect(latest.length).toBe(1);
        expect(latest[0].message).toBe('B');
    });

    it('should auto-dismiss after duration', fakeAsync(() => {
        service.show('Auto', 'success', { duration: 3000 });

        let latest: KitNotification[] = [];
        service.notifications$.subscribe((n) => (latest = n));

        expect(latest.length).toBe(1);
        tick(3000);
        expect(latest.length).toBe(0);
    }));

    it('should enforce max visible (5) notifications', () => {
        for (let i = 0; i < 7; i++) {
            service.show(`Msg ${i}`, 'success', { duration: 0 });
        }

        let latest: KitNotification[] = [];
        service.notifications$.subscribe((n) => (latest = n));

        expect(latest.length).toBe(5);
        expect(latest[0].message).toBe('Msg 2');
        expect(latest[4].message).toBe('Msg 6');
    });

    it('should include action label and callback in notification', (done) => {
        const callback = jest.fn();
        service.notifications$.subscribe((notifications) => {
            if (notifications.length === 1) {
                expect(notifications[0].actionLabel).toBe('Undo');
                expect(notifications[0].actionCallback).toBe(callback);
                done();
            }
        });
        service.show('Test', 'warning', { actionLabel: 'Undo', actionCallback: callback });
    });
});
