import { Component } from '@angular/core';
import { ClipboardService } from '../../services/clipboard.service';

@Component({
    selector: 'app-textarea-showcase',
    standalone: false,
    templateUrl: './textarea-showcase.component.html',
    styleUrls: ['./textarea-showcase.component.scss'],
})
export class TextareaShowcaseComponent {
    public usageCode = `<kit-textarea
  label="Description"
  placeholder="Enter a description"
  [rows]="4"
  [required]="true"
  [error]="error"
  [hint]="hint"
  [disabled]="false"
  (valueChange)="onValueChange($event)"
  (blurred)="onBlurred($event)"
></kit-textarea>`;

    public textareaValue = '';
    public disabledValue = 'This textarea is disabled';
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
        console.log('Textarea value changed:', value);
        this.textareaValue = value;
        // Simulate validation
        if (value && value.length < 10) {
            this.error = 'Description must be at least 10 characters';
            this.hint = '';
        } else {
            this.error = '';
            this.hint = value ? `${value.length} characters` : '';
        }
    }

    public onBlurred(event: FocusEvent): void {
        console.log('Textarea blurred', event);
    }
}
