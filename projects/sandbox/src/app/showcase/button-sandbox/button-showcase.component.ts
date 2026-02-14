import { Component } from '@angular/core';

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

    public onClick(event: MouseEvent): void {
        console.log('Button clicked', event);
    }

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
