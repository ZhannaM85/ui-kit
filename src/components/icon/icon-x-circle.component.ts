import { Component } from '@angular/core';
import { BaseIconComponent } from './base-icon.component';

@Component({
    selector: 'kit-icon-x-circle',
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
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
    `,
})
export class IconXCircleComponent extends BaseIconComponent {
    public override size = 20;
}
