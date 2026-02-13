import { Component } from '@angular/core';
import { ButtonComponent } from '@Zhannam85/ui-kit';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="showcase">
      <h1 class="showcase-title">Button</h1>
      <p class="showcase-desc">Variants and sizes of the button component.</p>

      <section class="showcase-section">
        <h3>Variants</h3>
        <div class="row">
          <lib-button label="Primary" variant="primary" (click)="onClick($event)"></lib-button>
          <lib-button label="Secondary" variant="secondary" (click)="onClick($event)"></lib-button>
          <lib-button label="Danger" variant="danger" (click)="onClick($event)"></lib-button>
        </div>
      </section>

      <section class="showcase-section">
        <h3>Sizes</h3>
        <div class="row">
          <lib-button label="Small" size="small" (click)="onClick($event)"></lib-button>
          <lib-button label="Medium" size="medium" (click)="onClick($event)"></lib-button>
          <lib-button label="Large" size="large" (click)="onClick($event)"></lib-button>
        </div>
      </section>

      <section class="showcase-section">
        <h3>States</h3>
        <div class="row">
          <lib-button label="Disabled" [disabled]="true"></lib-button>
          <lib-button label="Submit" type="submit" (click)="onClick($event)"></lib-button>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .showcase { max-width: 800px; }
    .showcase-title { font-size: 1.75rem; margin: 0 0 0.5rem 0; color: #111827; }
    .showcase-desc { color: #6b7280; margin: 0 0 2rem 0; }
    .showcase-section { margin-bottom: 2rem; }
    .showcase-section h3 { font-size: 1rem; margin: 0 0 0.75rem 0; color: #374151; font-weight: 600; }
    .row { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; }
  `],
})
export class ButtonShowcaseComponent {
  onClick(event: MouseEvent): void {
    console.log('Button clicked', event);
  }
}
