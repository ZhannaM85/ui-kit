/* eslint-disable @angular-eslint/prefer-inject */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, OnInit } from '@angular/core';
import { findSelectedOption, isActivationKey } from './dropdown.utils';
import { DropdownOption } from './dropdown.model';

export { DropdownOption } from './dropdown.model';

@Component({
    selector: 'kit-dropdown',
    standalone: false,
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnDestroy {
    private _options: DropdownOption[] = [];

    private _selectedValue: any = null;

    private onDocumentClick = (event: Event): void => {
        const target = event.target as HTMLElement;
        if (!this.elementRef.nativeElement.contains(target)) {
            this.isOpen = false;
        }
    };

    @Input() public set options(value: DropdownOption[]) {
        this._options = value ?? [];
        this.updateSelectedOption();
    }

    public get options(): DropdownOption[] {
        return this._options;
    }

    @Input() public placeholder = 'Select an option';

    @Input() public set selectedValue(value: any) {
        this._selectedValue = value;
        this.updateSelectedOption();
    }

    public get selectedValue(): any {
        return this._selectedValue;
    }

    @Input() public disabled = false;

    @Output() public selectionChange = new EventEmitter<any>();

    public isOpen = false;

    public selectedOption: DropdownOption | null = null;

    constructor(private elementRef: ElementRef) {}

    public ngOnInit(): void {
        this.updateSelectedOption();
        document.addEventListener('click', this.onDocumentClick);
    }

    public ngOnDestroy(): void {
        document.removeEventListener('click', this.onDocumentClick);
    }

    private updateSelectedOption(): void {
        this.selectedOption = findSelectedOption(this._options, this._selectedValue);
    }

    public toggleDropdown(): void {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }

    public onTriggerKeydown(event: KeyboardEvent): void {
        if (isActivationKey(event.key)) {
            event.preventDefault();
            this.toggleDropdown();
        }
    }

    public onOptionKeydown(event: KeyboardEvent, option: DropdownOption): void {
        if (isActivationKey(event.key)) {
            event.preventDefault();
            this.selectOption(option);
        }
    }

    public selectOption(option: DropdownOption): void {
        if (!this.disabled) {
            this.selectedOption = option;
            this._selectedValue = option.value;
            this.isOpen = false;
            this.selectionChange.emit(option.value);
        }
    }
}
