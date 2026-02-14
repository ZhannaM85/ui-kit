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
        this.copied = true;
        this.copyToClipboard(this.usageCode).then(() => {
            setTimeout(() => (this.copied = false), 2000);
        });
    }

    private copyToClipboard(text: string): Promise<void> {
        if (navigator.clipboard?.writeText) {
            return navigator.clipboard.writeText(text).catch(() => this.fallbackCopy(text));
        }
        return Promise.resolve(this.fallbackCopy(text));
    }

    private fallbackCopy(text: string): void {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}
