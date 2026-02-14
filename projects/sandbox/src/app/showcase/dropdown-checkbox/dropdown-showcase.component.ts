import { Component } from '@angular/core';
import { DropdownOption } from '@Zhannam85/ui-kit';

@Component({
    selector: 'app-dropdown-showcase',
    standalone: false,
    templateUrl: './dropdown-showcase.component.html',
    styleUrls: ['./dropdown-showcase.component.scss'],
})
export class DropdownShowcaseComponent {
    public usageCode =
        `<kit-dropdown
            [options]="options"
            placeholder="Choose one"
            [selectedValue]="selectedValue"
            (selectionChange)="onSelectionChange($event)"
        ></kit-dropdown>`;

    public options: DropdownOption[] = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
        { label: 'Option C', value: 'c' },
    ];

    public selectedValue: unknown = null;

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
