import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationContainerComponent } from './notification-container.component';
import { NotificationService } from './notification.service';
import { KitNotification } from './notification.model';

@Component({ selector: 'kit-notification', template: '', standalone: false })
class MockNotificationItemComponent {
    @Input() notification!: KitNotification;
    @Output() dismissed = new EventEmitter<string>();
}

describe('NotificationContainerComponent', () => {
    let component: NotificationContainerComponent;
    let fixture: ComponentFixture<NotificationContainerComponent>;
    let notificationsSubject: BehaviorSubject<KitNotification[]>;
    let mockService: Partial<NotificationService>;

    beforeEach(async () => {
        notificationsSubject = new BehaviorSubject<KitNotification[]>([]);
        mockService = {
            notifications$: notificationsSubject.asObservable(),
            dismiss: jest.fn(),
        };

        await TestBed.configureTestingModule({
            declarations: [NotificationContainerComponent, MockNotificationItemComponent],
            imports: [CommonModule],
            providers: [{ provide: NotificationService, useValue: mockService }],
        }).compileComponents();

        fixture = TestBed.createComponent(NotificationContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render notifications from the service', () => {
        notificationsSubject.next([
            { id: '1', message: 'A', type: 'success', duration: 5000 },
            { id: '2', message: 'B', type: 'warning', duration: 5000 },
        ]);
        fixture.detectChanges();

        const items = fixture.nativeElement.querySelectorAll('kit-notification');
        expect(items.length).toBe(2);
    });

    it('should update when notifications change', () => {
        notificationsSubject.next([{ id: '1', message: 'A', type: 'success', duration: 5000 }]);
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('kit-notification').length).toBe(1);

        notificationsSubject.next([]);
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('kit-notification').length).toBe(0);
    });

    it('should call service.dismiss when onDismiss is called', () => {
        component.onDismiss('test-id');
        expect(mockService.dismiss).toHaveBeenCalledWith('test-id');
    });

    it('should return notification id from trackById', () => {
        const notification: KitNotification = { id: 'n1', message: 'M', type: 'error', duration: 5000 };
        expect(component.trackById(0, notification)).toBe('n1');
    });
});
