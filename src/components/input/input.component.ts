import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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

    @Input() public error = '';

    @Input() public hint = '';

    @Output() public valueChange = new EventEmitter<string>();

    @Output() public blurred = new EventEmitter<FocusEvent>();

    public value = '';

    private onChange = (value: string): void => {};

    private onTouched = (): void => {};

    public onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.value = input.value;
        this.onChange(this.value);
        this.valueChange.emit(this.value);
    }

    public onBlur(event: FocusEvent): void {
        this.onTouched();
        this.blurred.emit(event);
    }

    // ControlValueAccessor implementation
    public writeValue(value: string): void {
        this.value = value ?? '';
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
