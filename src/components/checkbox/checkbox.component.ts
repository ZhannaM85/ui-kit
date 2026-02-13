import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'kit-checkbox',
    standalone: false,
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() public label = '';

  @Input() public checked = false;

  @Input() public disabled = false;

  @Input() public indeterminate = false;

  @Output() public checkedChange = new EventEmitter<boolean>();

  public onCheckboxChange(event: Event): void {
      if (!this.disabled) {
          const target = event.target as HTMLInputElement;
          this.checked = target.checked;
          this.indeterminate = false; // Clear indeterminate state when user interacts
          this.checkedChange.emit(this.checked);
      }
  }

  public getCheckboxId(): string {
      return `kit-checkbox-${Math.random().toString(36).substr(2, 9)}`;
  }
}
