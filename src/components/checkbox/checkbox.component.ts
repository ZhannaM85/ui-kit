import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() indeterminate: boolean = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  onCheckboxChange(event: Event): void {
    if (!this.disabled) {
      const target = event.target as HTMLInputElement;
      this.checked = target.checked;
      this.indeterminate = false; // Clear indeterminate state when user interacts
      this.checkedChange.emit(this.checked);
    }
  }

  getCheckboxId(): string {
    return `lib-checkbox-${Math.random().toString(36).substr(2, 9)}`;
  }
}
