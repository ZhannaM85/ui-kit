/* eslint-disable @angular-eslint/prefer-inject */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, OnInit } from '@angular/core';
import { findSelectedOption, isActivationKey } from '../../utils/utils';
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

    /**
     * Initializes selected option and subscribes to outside-click close behavior.
     */
    constructor(private elementRef: ElementRef) {}

    /**
     * Syncs selected option and binds document click listener.
     */
    public ngOnInit(): void {
        this.updateSelectedOption();
        document.addEventListener('click', this.onDocumentClick);
    }

    /**
     * Removes document click listener when component is destroyed.
     */
    public ngOnDestroy(): void {
        document.removeEventListener('click', this.onDocumentClick);
    }

    /**
     * Resolves the selected option from current value and options list.
     */
    private updateSelectedOption(): void {
        this.selectedOption = findSelectedOption(this._options, this._selectedValue);
    }

    /**
     * Toggles the dropdown panel open/closed when enabled.
     */
    public toggleDropdown(): void {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }

    /**
     * Handles keyboard activation on the trigger element.
     *
     * @param event Trigger keyboard event.
     */
    public onTriggerKeydown(event: KeyboardEvent): void {
        if (isActivationKey(event.key)) {
            event.preventDefault();
            this.toggleDropdown();
        }
    }

    /**
     * Handles keyboard selection for a focused option.
     *
     * @param event Option keyboard event.
     * @param option Option associated with the focused element.
     */
    public onOptionKeydown(event: KeyboardEvent, option: DropdownOption): void {
        if (isActivationKey(event.key)) {
            event.preventDefault();
            this.selectOption(option);
        }
    }

    /**
     * Selects an option, emits its value, and closes the dropdown.
     *
     * @param option Option to select.
     */
    public selectOption(option: DropdownOption): void {
        if (!this.disabled) {
            this.selectedOption = option;
            this._selectedValue = option.value;
            this.isOpen = false;
            this.selectionChange.emit(option.value);
        }
    }
}
