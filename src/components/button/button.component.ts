import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kit-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public label = '';

  @Input() public variant: 'primary' | 'secondary' | 'danger' = 'primary';

  @Input() public disabled = false;

  @Input() public type: 'button' | 'submit' | 'reset' = 'button';

  @Input() public size: 'small' | 'medium' | 'large' = 'medium';

  @Output() public buttonClicked = new EventEmitter<MouseEvent>();

  public onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.buttonClicked.emit(event);
    }
  }
}
