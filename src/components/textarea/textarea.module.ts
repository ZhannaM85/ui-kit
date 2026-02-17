import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextareaComponent } from './textarea.component';

@NgModule({
    declarations: [TextareaComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [TextareaComponent],
})
export class TextareaModule {}
