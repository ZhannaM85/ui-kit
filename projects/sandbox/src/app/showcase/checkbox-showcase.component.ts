import { Component } from '@angular/core';
import { CheckboxComponent } from '@Zhannam85/ui-kit';

@Component({
  selector: 'app-checkbox-showcase',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <div class="showcase">
      <h1 class="showcase-title">Checkbox</h1>
      <p class="showcase-desc">Checkbox with label and states.</p>

      <section class="showcase-section">
        <h3>Basic</h3>
        <lib-checkbox
          label="Accept terms and conditions"
          [checked]="checked"
          (checkedChange)="checked = $event"
        ></lib-checkbox>
        <p class="result">Checked: {{ checked }}</p>
      </section>

      <section class="showcase-section">
        <h3>Disabled</h3>
        <lib-checkbox label="Disabled unchecked" [disabled]="true"></lib-checkbox>
        <lib-checkbox label="Disabled checked" [checked]="true" [disabled]="true"></lib-checkbox>
      </section>

      <section class="showcase-section">
        <h3>Indeterminate</h3>
        <lib-checkbox label="Indeterminate state" [indeterminate]="true"></lib-checkbox>
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
export class CheckboxShowcaseComponent {
  checked = false;
}
