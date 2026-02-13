import { Component } from '@angular/core';
import { DropdownComponent, DropdownOption } from '@Zhannam85/ui-kit';

@Component({
  selector: 'app-dropdown-showcase',
  standalone: true,
  imports: [DropdownComponent],
  template: `
    <div class="showcase">
      <h1 class="showcase-title">Dropdown</h1>
      <p class="showcase-desc">Select component with customizable options.</p>

      <section class="showcase-section">
        <h3>Basic</h3>
        <lib-dropdown
          [options]="options"
          placeholder="Choose one"
          [selectedValue]="selectedValue"
          (selectionChange)="selectedValue = $event"
        ></lib-dropdown>
        @if (selectedValue !== null) {
          <p class="result">Selected: {{ selectedValue }}</p>
        }
      </section>

      <section class="showcase-section">
        <h3>Disabled</h3>
        <lib-dropdown
          [options]="options"
          placeholder="Disabled"
          [disabled]="true"
        ></lib-dropdown>
      </section>
    </div>
  `,
  styles: [`
    .showcase { max-width: 800px; }
    .showcase-title { font-size: 1.75rem; margin: 0 0 0.5rem 0; color: #111827; }
    .showcase-desc { color: #6b7280; margin: 0 0 2rem 0; }
    .showcase-section { margin-bottom: 2rem; }
    .showcase-section h3 { font-size: 1rem; margin: 0 0 0.75rem 0; color: #374151; font-weight: 600; }
    .result { margin-top: 0.75rem; font-size: 0.875rem; color: #6b7280; }
  `],
})
export class DropdownShowcaseComponent {
  options: DropdownOption[] = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ];
  selectedValue: unknown = null;
}
