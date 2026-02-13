import { Component } from '@angular/core';
import { DropdownOption } from '@Zhannam85/ui-kit';

@Component({
  selector: 'app-dropdown-showcase',
  standalone: false,
  templateUrl: './dropdown-showcase.component.html',
  styleUrls: ['./dropdown-showcase.component.scss'],
})
export class DropdownShowcaseComponent {
  usageCode = `<kit-dropdown
  [options]="options"
  placeholder="Choose one"
  [selectedValue]="selectedValue"
  (selectionChange)="onSelectionChange($event)"
></kit-dropdown>`;

  options: DropdownOption[] = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ];
  selectedValue: unknown = null;

  copied = false;

  copyUsageCode(): void {
    navigator.clipboard.writeText(this.usageCode).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    });
  }
}
