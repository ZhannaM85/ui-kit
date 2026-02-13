import { Component } from '@angular/core';
import { CheckboxComponent } from '@Zhannam85/ui-kit';

@Component({
  selector: 'app-checkbox-showcase',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './checkbox-showcase.component.html',
  styleUrls: ['./checkbox-showcase.component.scss'],
})
export class CheckboxShowcaseComponent {
  checked = false;
}
