import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
    declarations: [DropdownComponent],
    imports: [CommonModule, IconModule],
    exports: [DropdownComponent],
})
export class DropdownModule {}
