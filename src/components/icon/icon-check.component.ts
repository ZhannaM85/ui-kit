import { Component } from '@angular/core';
import { BaseIconComponent } from './base-icon.component';

@Component({
    selector: 'kit-icon-check',
    standalone: false,
    template: `
        <svg
            [attr.width]="size"
            [attr.height]="size"
            viewBox="0 0 24 24"
            fill="none"
            [attr.stroke]="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M20 6L9 17l-5-5"/>
        </svg>
    `,
})
export class IconCheckComponent extends BaseIconComponent {
    public override size = 16;
}
