import { Component } from '@angular/core';
import { BaseIconComponent } from './base-icon.component';

@Component({
    selector: 'kit-icon-chevron-down',
    standalone: false,
    template: `
        <svg
            [attr.width]="size"
            [attr.height]="size"
            viewBox="0 0 12 12"
            fill="none"
            [attr.stroke]="color"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M3 4.5L6 7.5L9 4.5"/>
        </svg>
    `,
})
export class IconChevronDownComponent extends BaseIconComponent {
    public override size = 12;
}
