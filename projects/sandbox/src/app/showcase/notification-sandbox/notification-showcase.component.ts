/* eslint-disable @angular-eslint/prefer-inject */
import { Component } from '@angular/core';
import { NotificationService } from '@zhannam85/ui-kit';
import { ClipboardService } from '../../services/clipboard.service';

@Component({
    selector: 'app-notification-showcase',
    standalone: false,
    templateUrl: './notification-showcase.component.html',
    styleUrls: ['./notification-showcase.component.scss'],
})
export class NotificationShowcaseComponent {
    public usageCode = `// In your module:
import { NotificationModule } from '@zhannam85/ui-kit';

// In your root template:
<kit-notification-container></kit-notification-container>

// In your component:
import { NotificationService } from '@zhannam85/ui-kit';

constructor(private notifications: NotificationService) {}

this.notifications.success('Operation completed');
this.notifications.warning('Check your input');
this.notifications.error('Something went wrong');`;

    public copied = false;

    constructor(
        private notificationService: NotificationService,
        private clipboard: ClipboardService,
    ) {}

    public showSuccess(): void {
        this.notificationService.success('Server was successfully added.');
    }

    public showWarning(): void {
        this.notificationService.warning('Server "web-prod-01" was shut down.');
    }

    public showError(): void {
        this.notificationService.error('Failed to connect to the server.');
    }

    public showCustomDuration(): void {
        this.notificationService.show('This disappears in 5 seconds.', 'success', 5000);
    }

    public copyUsageCode(): void {
        this.copied = true;
        this.clipboard.copy(this.usageCode).then(() => {
            setTimeout(() => (this.copied = false), 2000);
        });
    }
}
