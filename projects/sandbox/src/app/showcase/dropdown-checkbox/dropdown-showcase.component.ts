import { Component } from '@angular/core';
import { DropdownOption } from '@Zhannam85/ui-kit';

@Component({
  selector: 'app-dropdown-showcase',
  standalone: false,
  templateUrl: './dropdown-showcase.component.html',
  styleUrls: ['./dropdown-showcase.component.scss'],
})
export class DropdownShowcaseComponent {
  options: DropdownOption[] = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ];
  selectedValue: unknown = null;
}
