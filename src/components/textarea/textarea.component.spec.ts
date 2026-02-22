import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea.component';

describe('TextareaComponent', () => {
    let component: TextareaComponent;
    let fixture: ComponentFixture<TextareaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TextareaComponent],
            imports: [CommonModule, FormsModule, ReactiveFormsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(TextareaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the label when provided', () => {
        component.label = 'Description';
        fixture.detectChanges();
        const label = fixture.nativeElement.querySelector('.lib-textarea-label');
        expect(label?.textContent).toContain('Description');
    });

    it('should not render label when empty', () => {
        component.label = '';
        fixture.detectChanges();
        const label = fixture.nativeElement.querySelector('.lib-textarea-label');
        expect(label).toBeNull();
    });

    it('should set placeholder on textarea element', () => {
        component.placeholder = 'Enter description';
        fixture.detectChanges();
        const textarea = fixture.nativeElement.querySelector('textarea');
        expect(textarea.placeholder).toBe('Enter description');
    });

    it('should set disabled attribute', () => {
        component.disabled = true;
        fixture.detectChanges();
        const textarea = fixture.nativeElement.querySelector('textarea');
        expect(textarea.disabled).toBe(true);
    });

    it('should set rows attribute', () => {
        component.rows = 8;
        fixture.detectChanges();
        const textarea = fixture.nativeElement.querySelector('textarea');
        expect(textarea.rows).toBe(8);
    });

    it('should default to 4 rows', () => {
        const textarea = fixture.nativeElement.querySelector('textarea');
        expect(textarea.rows).toBe(4);
    });

    it('should show required asterisk', () => {
        component.label = 'Notes';
        component.required = true;
        fixture.detectChanges();
        const asterisk = fixture.nativeElement.querySelector('.lib-textarea-required');
        expect(asterisk).toBeTruthy();
    });

    it('should display error text', () => {
        component.error = 'Required field';
        fixture.detectChanges();
        const error = fixture.nativeElement.querySelector('.lib-textarea-error');
        expect(error?.textContent).toContain('Required field');
    });

    it('should display hint text when no error', () => {
        component.hint = 'Max 500 chars';
        fixture.detectChanges();
        const hint = fixture.nativeElement.querySelector('.lib-textarea-hint');
        expect(hint?.textContent).toContain('Max 500 chars');
    });

    it('should emit valueChange on input', () => {
        jest.spyOn(component.valueChange, 'emit');
        const textarea = fixture.nativeElement.querySelector('textarea');
        textarea.value = 'hello';
        textarea.dispatchEvent(new Event('input'));
        expect(component.valueChange.emit).toHaveBeenCalledWith('hello');
    });

    it('should emit blurred on blur', () => {
        jest.spyOn(component.blurred, 'emit');
        const textarea = fixture.nativeElement.querySelector('textarea');
        textarea.dispatchEvent(new Event('blur'));
        expect(component.blurred.emit).toHaveBeenCalled();
    });

    it('should implement writeValue', () => {
        component.writeValue('test');
        expect(component.value).toBe('test');
    });

    it('should handle null in writeValue', () => {
        component.writeValue(null as unknown as string);
        expect(component.value).toBe('');
    });

    it('should implement setDisabledState', () => {
        component.setDisabledState(true);
        expect(component.disabled).toBe(true);
    });

    it('should generate a unique textareaId', () => {
        expect(component.textareaId).toMatch(/^kit-textarea-/);
    });
});
