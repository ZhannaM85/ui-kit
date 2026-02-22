import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NotificationItemComponent } from './notification-item.component';
import { KitNotification } from './notification.model';

@Component({ selector: 'kit-icon-check-circle', template: '', standalone: false })
class MockCheckCircleComponent { @Input() size: number | undefined; }

@Component({ selector: 'kit-icon-alert-triangle', template: '', standalone: false })
class MockAlertTriangleComponent { @Input() size: number | undefined; }

@Component({ selector: 'kit-icon-x-circle', template: '', standalone: false })
class MockXCircleComponent { @Input() size: number | undefined; }

@Component({ selector: 'kit-icon-close', template: '', standalone: false })
class MockCloseComponent { @Input() size: number | undefined; }

describe('NotificationItemComponent', () => {
    let component: NotificationItemComponent;
    let fixture: ComponentFixture<NotificationItemComponent>;

    const baseNotification: KitNotification = {
        id: 'test-1',
        message: 'Test message',
        type: 'success',
        duration: 5000,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                NotificationItemComponent,
                MockCheckCircleComponent,
                MockAlertTriangleComponent,
                MockXCircleComponent,
                MockCloseComponent,
            ],
            imports: [CommonModule],
        }).compileComponents();

        fixture = TestBed.createComponent(NotificationItemComponent);
        component = fixture.componentInstance;
        component.notification = { ...baseNotification };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the notification message', () => {
        const message = fixture.nativeElement.querySelector('.kit-notification__message');
        expect(message?.textContent).toContain('Test message');
    });

    it('should apply the correct type class', () => {
        const el = fixture.nativeElement.querySelector('.kit-notification');
        expect(el.classList.contains('kit-notification--success')).toBe(true);
    });

    it('should emit dismissed with ID when dismiss is clicked', () => {
        jest.spyOn(component.dismissed, 'emit');
        const closeBtn = fixture.nativeElement.querySelector('.kit-notification__close');
        closeBtn.click();
        expect(component.dismissed.emit).toHaveBeenCalledWith('test-1');
    });

    it('should not show action button when no actionLabel', () => {
        const actionBtn = fixture.nativeElement.querySelector('.kit-notification__action');
        expect(actionBtn).toBeNull();
    });

    it('should show action button when actionLabel is set', () => {
        component.notification = { ...baseNotification, actionLabel: 'Undo' };
        fixture.detectChanges();
        const actionBtn = fixture.nativeElement.querySelector('.kit-notification__action');
        expect(actionBtn?.textContent).toContain('Undo');
    });

    it('should call actionCallback and emit dismissed when action is clicked', () => {
        const callback = jest.fn();
        component.notification = { ...baseNotification, actionLabel: 'Undo', actionCallback: callback };
        fixture.detectChanges();
        jest.spyOn(component.dismissed, 'emit');

        const actionBtn = fixture.nativeElement.querySelector('.kit-notification__action');
        actionBtn.click();

        expect(callback).toHaveBeenCalled();
        expect(component.dismissed.emit).toHaveBeenCalledWith('test-1');
    });
});
