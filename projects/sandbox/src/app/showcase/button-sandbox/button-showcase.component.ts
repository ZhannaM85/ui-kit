import { Component } from '@angular/core';

@Component({
  selector: 'app-button-showcase',
  standalone: false,
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
})
export class ButtonShowcaseComponent {
  usageCode = `<lib-button
  [label]="'My button label'"
  [variant]="'primary'"
  [disabled]="false"
  [type]="'submit'"
  [size]="'large'"
  (click)="buttonClicked($event)"
></lib-button>`;

  copied = false;

  onClick(event: MouseEvent): void {
    console.log('Button clicked', event);
  }

  copyUsageCode(): void {
    navigator.clipboard.writeText(this.usageCode).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    });
  }
}
