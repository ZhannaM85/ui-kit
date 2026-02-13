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
  @Input() options: DropdownOption[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() selectedValue: any = null;
  @Input() disabled: boolean = false;

  @Output() selectionChange = new EventEmitter<any>();

  isOpen: boolean = false;
  selectedOption: DropdownOption | null = null;

  ngOnChanges(): void {
    this.updateSelectedOption();
  }

  ngOnInit(): void {
    this.updateSelectedOption();
  }

  private updateSelectedOption(): void {
    if (this.selectedValue !== null && this.selectedValue !== undefined) {
      this.selectedOption = this.options.find(opt => opt.value === this.selectedValue) || null;
    } else {
      this.selectedOption = null;
    }
  }

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  selectOption(option: DropdownOption): void {
    if (!this.disabled) {
      this.selectedOption = option;
      this.selectedValue = option.value;
      this.isOpen = false;
      this.selectionChange.emit(option.value);
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.lib-dropdown')) {
      this.isOpen = false;
    }
  }
}
