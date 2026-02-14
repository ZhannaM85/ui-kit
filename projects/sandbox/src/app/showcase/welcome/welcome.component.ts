import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    standalone: false,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
    public installCommand = 'npm install @Zhannam85/ui-kit';
    public copied = false;

    public copyCommand(): void {
        const text = this.installCommand;
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(text).catch(() => this.fallbackCopy(text));
        } else {
            this.fallbackCopy(text);
        }
        this.copied = true;
        setTimeout(() => (this.copied = false), 2000);
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
