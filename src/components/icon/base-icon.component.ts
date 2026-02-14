import { Component, HostBinding, Input } from '@angular/core';

@Component({ template: '' })
export abstract class BaseIconComponent {
    @Input() public size = 24;

    @Input() public color = 'currentColor';

    @HostBinding('style.width.px')
    public get hostWidth(): number {
        return this.size;
    }

    @HostBinding('style.height.px')
    public get hostHeight(): number {
        return this.size;
    }

    @HostBinding('style.display')
    public readonly display = 'inline-flex';

    @HostBinding('style.color')
    public get hostColor(): string {
        return this.color;
    }
}
