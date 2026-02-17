import { Component } from '@angular/core';
import { ClipboardService } from '../../services/clipboard.service';

@Component({
    selector: 'app-icon-showcase',
    standalone: false,
    templateUrl: './icon-showcase.component.html',
    styleUrls: ['./icon-showcase.component.scss'],
})
export class IconShowcaseComponent {
    public usageCode = `<kit-icon-copy [size]="24" [color]="'currentColor'"></kit-icon-copy>`;

    public copied = false;

    public size = 24;

    constructor(private readonly clipboard: ClipboardService) {}

    public copyUsageCode(): void {
        this.copied = true;
        this.clipboard.copy(this.usageCode).then(() => {
            setTimeout(() => (this.copied = false), 2000);
        });
    }
}
