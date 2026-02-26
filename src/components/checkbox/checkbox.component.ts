import { Component, EventEmitter, Input, Output } from '@angular/core';
import { generateId } from '../../utils/utils';

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

  /** Stable id for the input (generated once per component instance to avoid NG0100). */
  public readonly checkboxId = generateId('kit-checkbox');

  /**
   * Handles native checkbox change and emits the updated checked state.
   *
   * @param event Native change event from checkbox input.
   */
  public onCheckboxChange(event: Event): void {
      if (!this.disabled) {
          const target = event.target as HTMLInputElement;
          this.checked = target.checked;
          this.indeterminate = false; // Clear indeterminate state when user interacts
          this.checkedChange.emit(this.checked);
      }
  }
}
