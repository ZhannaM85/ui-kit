import { Component } from '@angular/core';
import { ButtonComponent } from '@Zhannam85/ui-kit';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
})
export class ButtonShowcaseComponent {
  onClick(event: MouseEvent): void {
    console.log('Button clicked', event);
  }
}
