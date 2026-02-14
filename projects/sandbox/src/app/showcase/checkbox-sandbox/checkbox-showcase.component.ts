import { Component } from '@angular/core';
import { ClipboardService } from '../../services/clipboard.service';

@Component({
    selector: 'app-checkbox-showcase',
    standalone: false,
    templateUrl: './checkbox-showcase.component.html',
    styleUrls: ['./checkbox-showcase.component.scss'],
})
export class CheckboxShowcaseComponent {
    public usageCode = `<kit-checkbox
  label="Accept terms and conditions"
  [checked]="checked"
  [disabled]="false"
  [indeterminate]="false"
  (checkedChange)="onCheckedChange($event)"
></kit-checkbox>`;

    public checked = false;

    public copied = false;

    constructor(private readonly clipboard: ClipboardService) {}

    public copyUsageCode(): void {
        this.copied = true;
        this.clipboard.copy(this.usageCode).then(() => {
            setTimeout(() => (this.copied = false), 2000);
        });
    }
}
