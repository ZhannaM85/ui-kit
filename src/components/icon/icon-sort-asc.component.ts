import { Component } from '@angular/core';
import { BaseIconComponent } from './base-icon.component';

@Component({
    selector: 'kit-icon-sort-asc',
    standalone: false,
    template: `
        <svg
            [attr.width]="size"
            [attr.height]="size"
            viewBox="0 0 12 12"
            [attr.fill]="color">
            <path d="M6 2L10 8H2L6 2Z"/>
        </svg>
    `,
})
export class IconSortAscComponent extends BaseIconComponent {
    public override size = 12;
}
