/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { generateId } from '../../utils/utils';

@Component({
    selector: 'kit-input',
    standalone: false,
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
})
export class InputComponent implements ControlValueAccessor {
    @Input() public label = '';

    @Input() public placeholder = '';

    @Input() public type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' = 'text';

    @Input() public disabled = false;

    @Input() public required = false;

    @Input() public clearable = false;

    @Input() public error = '';

    @Input() public hint = '';

    @Output() public valueChange = new EventEmitter<string>();

    @Output() public blurred = new EventEmitter<FocusEvent>();

    @Output() public cleared = new EventEmitter<void>();

    public value = '';

    public inputId = generateId('kit-input', 7);

    public get errorId(): string {
        return `${this.inputId}-error`;
    }

    public get hintId(): string {
        return `${this.inputId}-hint`;
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

    private onChange = (_: string): void => {
        // Placeholder - will be replaced by Angular forms via registerOnChange
    };

    private onTouched = (): void => {
        // Placeholder - will be replaced by Angular forms via registerOnTouched
    };

    /**
     * Handles native input updates and propagates value changes.
     *
     * @param event Native input event.
     */
    public onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.value = input.value;
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

    /**
     * Clears the current value and emits clear/change events.
     */
    public clearValue(): void {
        this.value = '';
        this.onChange(this.value);
        this.valueChange.emit(this.value);
        this.cleared.emit();
    }

    // ControlValueAccessor implementation
    /**
     * Writes an external form value into the input.
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
