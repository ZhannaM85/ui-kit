import { NgModule } from '@angular/core';

import { IconCopyComponent } from './icon-copy.component';
import { IconCheckComponent } from './icon-check.component';
import { IconChevronDownComponent } from './icon-chevron-down.component';
import { IconCloseComponent } from './icon-close.component';
import { IconSortAscComponent } from './icon-sort-asc.component';
import { IconSortDescComponent } from './icon-sort-desc.component';
import { IconCheckCircleComponent } from './icon-check-circle.component';
import { IconAlertTriangleComponent } from './icon-alert-triangle.component';
import { IconXCircleComponent } from './icon-x-circle.component';

const ICON_COMPONENTS = [
    IconCopyComponent,
    IconCheckComponent,
    IconChevronDownComponent,
    IconCloseComponent,
    IconSortAscComponent,
    IconSortDescComponent,
    IconCheckCircleComponent,
    IconAlertTriangleComponent,
    IconXCircleComponent,
];

@NgModule({
    declarations: ICON_COMPONENTS,
    exports: ICON_COMPONENTS,
})
export class IconModule {}
