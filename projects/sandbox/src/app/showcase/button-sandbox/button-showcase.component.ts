import { Component } from '@angular/core';

@Component({
  selector: 'app-button-showcase',
  standalone: false,
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
})
export class ButtonShowcaseComponent {
  onClick(event: MouseEvent): void {
    console.log('Button clicked', event);
  }
}
