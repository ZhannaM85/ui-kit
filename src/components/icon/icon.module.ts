import { NgModule } from '@angular/core';

import { IconCopyComponent } from './icon-copy.component';
import { IconCheckComponent } from './icon-check.component';
import { IconChevronDownComponent } from './icon-chevron-down.component';
import { IconCloseComponent } from './icon-close.component';
import { IconSortAscComponent } from './icon-sort-asc.component';
import { IconSortDescComponent } from './icon-sort-desc.component';

const ICON_COMPONENTS = [
    IconCopyComponent,
    IconCheckComponent,
    IconChevronDownComponent,
    IconCloseComponent,
    IconSortAscComponent,
    IconSortDescComponent,
];

@NgModule({
    declarations: ICON_COMPONENTS,
    exports: ICON_COMPONENTS,
})
export class IconModule {}
