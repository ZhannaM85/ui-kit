import { Component } from '@angular/core';
import { BaseIconComponent } from './base-icon.component';

@Component({
    selector: 'kit-icon-sort-desc',
    standalone: false,
    template: `
        <svg
            [attr.width]="size"
            [attr.height]="size"
            viewBox="0 0 12 12"
            [attr.fill]="color">
            <path d="M6 10L2 4H10L6 10Z"/>
        </svg>
    `,
})
export class IconSortDescComponent extends BaseIconComponent {
    public override size = 12;
}
