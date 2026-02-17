import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input.component';

@NgModule({
    declarations: [InputComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent],
})
export class InputModule {}
