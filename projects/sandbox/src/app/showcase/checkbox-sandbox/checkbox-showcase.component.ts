import { Component } from '@angular/core';

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

    public copyUsageCode(): void {
        navigator.clipboard.writeText(this.usageCode).then(() => {
            this.copied = true;
            setTimeout(() => (this.copied = false), 2000);
        });
    }
}
