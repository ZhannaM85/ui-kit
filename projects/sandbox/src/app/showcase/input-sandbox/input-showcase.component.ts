import { Component } from '@angular/core';
import { ClipboardService } from '../../services/clipboard.service';

@Component({
    selector: 'app-input-showcase',
    standalone: false,
    templateUrl: './input-showcase.component.html',
    styleUrls: ['./input-showcase.component.scss'],
})
export class InputShowcaseComponent {
    public usageCode = `<kit-input
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  [required]="true"
  [error]="error"
  [hint]="hint"
  [disabled]="false"
  (valueChange)="onValueChange($event)"
  (blurred)="onBlurred($event)"
></kit-input>`;

    public inputValue = '';
    public disabledValue = 'Disabled value';
    public error = '';
    public hint = '';
    public copied = false;

    constructor(private readonly clipboard: ClipboardService) {}

    public copyUsageCode(): void {
        this.copied = true;
        this.clipboard.copy(this.usageCode).then(() => {
            setTimeout(() => (this.copied = false), 2000);
        });
    }

    public onValueChange(value: string): void {
        console.log('Input value changed:', value);
        this.inputValue = value;
        // Simulate validation
        if (value && !value.includes('@')) {
            this.error = 'Please enter a valid email address';
            this.hint = '';
        } else {
            this.error = '';
            this.hint = value ? 'Looks good!' : '';
        }
    }

    public onBlurred(event: FocusEvent): void {
        console.log('Input blurred', event);
    }
}
