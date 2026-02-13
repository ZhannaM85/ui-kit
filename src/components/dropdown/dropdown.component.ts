/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, HostListener, Input, Output, OnInit } from '@angular/core';

export interface DropdownOption {
    label: string;
    value: any;
}

@Component({
    selector: 'kit-dropdown',
    standalone: false,
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
    private _options: DropdownOption[] = [];
    private _selectedValue: any = null;

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

    public ngOnInit(): void {
        this.updateSelectedOption();
    }

    private updateSelectedOption(): void {
        if (this._selectedValue !== null && this._selectedValue !== undefined) {
            this.selectedOption = this._options.find(opt => opt.value === this._selectedValue) || null;
        } else {
            this.selectedOption = null;
        }
    }

    public toggleDropdown(): void {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }

    public onTriggerKeydown(event: KeyboardEvent): void {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.toggleDropdown();
        }
    }

    public onOptionKeydown(event: KeyboardEvent, option: DropdownOption): void {
        if (event.key === 'Enter' || event.key === ' ') {
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

  @HostListener('document:click', ['$event'])
    public onClickOutside(event: Event): void {
        const target = event.target as HTMLElement;
        if (!target.closest('.lib-dropdown')) {
            this.isOpen = false;
        }
    }
}
