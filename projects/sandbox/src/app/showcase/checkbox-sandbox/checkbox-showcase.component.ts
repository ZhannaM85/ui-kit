import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-showcase',
  standalone: false,
  templateUrl: './checkbox-showcase.component.html',
  styleUrls: ['./checkbox-showcase.component.scss'],
})
export class CheckboxShowcaseComponent {
  checked = false;
}
