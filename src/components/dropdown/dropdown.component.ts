/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, HostListener, Input, Output, OnChanges, OnInit } from '@angular/core';

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
export class DropdownComponent implements OnChanges, OnInit {
    @Input() public options: DropdownOption[] = [];

    @Input() public placeholder = 'Select an option';

    @Input() public selectedValue: any = null;

    @Input() public disabled = false;

    @Output() public selectionChange = new EventEmitter<any>();

    public isOpen = false;

    public selectedOption: DropdownOption | null = null;

    public ngOnChanges(): void {
        this.updateSelectedOption();
    }

    public ngOnInit(): void {
        this.updateSelectedOption();
    }

    private updateSelectedOption(): void {
        if (this.selectedValue !== null && this.selectedValue !== undefined) {
            this.selectedOption = this.options.find(opt => opt.value === this.selectedValue) || null;
        } else {
            this.selectedOption = null;
        }
    }

    public toggleDropdown(): void {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }

    public selectOption(option: DropdownOption): void {
        if (!this.disabled) {
            this.selectedOption = option;
            this.selectedValue = option.value;
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
