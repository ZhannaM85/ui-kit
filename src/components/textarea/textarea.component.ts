import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { generateId } from '../../utils/utils';

@Component({
    selector: 'kit-textarea',
    standalone: false,
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextareaComponent),
            multi: true,
        },
    ],
})
export class TextareaComponent implements ControlValueAccessor {
    @Input() public label = '';

    @Input() public placeholder = '';

    @Input() public disabled = false;

    @Input() public required = false;

    @Input() public error = '';

    @Input() public hint = '';

    @Input() public rows = 4;

    @Output() public valueChange = new EventEmitter<string>();

    @Output() public blurred = new EventEmitter<FocusEvent>();

    public value = '';

    public textareaId = generateId('kit-textarea', 7);

    public get errorId(): string {
        return `${this.textareaId}-error`;
    }

    public get hintId(): string {
        return `${this.textareaId}-hint`;
    }

    public get describedById(): string | null {
        if (this.error) {
            return this.errorId;
        }

        if (this.hint) {
            return this.hintId;
        }

        return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private onChange = (_: string): void => {
        // Placeholder - will be replaced by Angular forms via registerOnChange
    };

    private onTouched = (): void => {
        // Placeholder - will be replaced by Angular forms via registerOnTouched
    };

    /**
     * Handles native textarea updates and propagates value changes.
     *
     * @param event Native input event.
     */
    public onInput(event: Event): void {
        const textarea = event.target as HTMLTextAreaElement;
        this.value = textarea.value;
        this.onChange(this.value);
        this.valueChange.emit(this.value);
    }

    /**
     * Marks the control as touched and emits blur event.
     *
     * @param event Native focus event.
     */
    public onBlur(event: FocusEvent): void {
        this.onTouched();
        this.blurred.emit(event);
    }

    // ControlValueAccessor implementation
    /**
     * Writes an external form value into the textarea.
     *
     * @param value Value supplied by Angular forms.
     */
    public writeValue(value: string): void {
        this.value = value ?? '';
    }

    /**
     * Registers callback for model updates.
     *
     * @param fn Change callback from Angular forms.
     */
    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    /**
     * Registers callback for touched state.
     *
     * @param fn Touch callback from Angular forms.
     */
    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    /**
     * Updates disabled state from Angular forms.
     *
     * @param isDisabled Whether control should be disabled.
     */
    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
