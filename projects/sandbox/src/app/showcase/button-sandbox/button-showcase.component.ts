import { Component } from '@angular/core';
import { ClipboardService } from '../../services/clipboard.service';

@Component({
    selector: 'app-button-showcase',
    standalone: false,
    templateUrl: './button-showcase.component.html',
    styleUrls: ['./button-showcase.component.scss'],
})
export class ButtonShowcaseComponent {
    public usageCode = `<kit-button
  [label]="'My button label'"
  [variant]="'primary'"
  [disabled]="false"
  [type]="'submit'"
  [size]="'large'"
  (buttonClicked)="buttonClicked($event)"
></kit-button>`;

    public copied = false;

    constructor(private readonly clipboard: ClipboardService) {}

    public onClick(event: MouseEvent): void {
        console.log('Button clicked', event);
    }

    public copyUsageCode(): void {
        this.copied = true;
        this.clipboard.copy(this.usageCode).then(() => {
            setTimeout(() => (this.copied = false), 2000);
        });
    }
}
