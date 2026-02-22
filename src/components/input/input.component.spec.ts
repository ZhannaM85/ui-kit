import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { InputComponent } from './input.component';

@Component({ selector: 'kit-icon-close', template: '', standalone: false })
class MockIconCloseComponent {
    public size: number | undefined;

    public color: string | undefined;
}

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InputComponent, MockIconCloseComponent],
            imports: [CommonModule, FormsModule, ReactiveFormsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the label when provided', () => {
        component.label = 'Email';
        fixture.detectChanges();
        const label = fixture.nativeElement.querySelector('.lib-input-label');
        expect(label?.textContent).toContain('Email');
    });

    it('should not render label when empty', () => {
        component.label = '';
        fixture.detectChanges();
        const label = fixture.nativeElement.querySelector('.lib-input-label');
        expect(label).toBeNull();
    });

    it('should set placeholder on input element', () => {
        component.placeholder = 'Enter email';
        fixture.detectChanges();
        const input = fixture.nativeElement.querySelector('input');
        expect(input.placeholder).toBe('Enter email');
    });

    it('should set disabled attribute when disabled is true', () => {
        component.disabled = true;
        fixture.detectChanges();
        const input = fixture.nativeElement.querySelector('input');
        expect(input.disabled).toBe(true);
    });

    it('should set type attribute', () => {
        component.type = 'email';
        fixture.detectChanges();
        const input = fixture.nativeElement.querySelector('input');
        expect(input.type).toBe('email');
    });

    it('should show required asterisk when required is true', () => {
        component.label = 'Name';
        component.required = true;
        fixture.detectChanges();
        const asterisk = fixture.nativeElement.querySelector('.lib-input-required');
        expect(asterisk).toBeTruthy();
    });

    it('should display error text when error is set', () => {
        component.error = 'Invalid email';
        fixture.detectChanges();
        const error = fixture.nativeElement.querySelector('.lib-input-error');
        expect(error?.textContent).toContain('Invalid email');
    });

    it('should display hint text when hint is set and no error', () => {
        component.hint = 'Enter a valid email';
        fixture.detectChanges();
        const hint = fixture.nativeElement.querySelector('.lib-input-hint');
        expect(hint?.textContent).toContain('Enter a valid email');
    });

    it('should emit valueChange on input', () => {
        jest.spyOn(component.valueChange, 'emit');
        const input = fixture.nativeElement.querySelector('input');
        input.value = 'hello';
        input.dispatchEvent(new Event('input'));
        expect(component.valueChange.emit).toHaveBeenCalledWith('hello');
    });

    it('should emit blurred on blur', () => {
        jest.spyOn(component.blurred, 'emit');
        const input = fixture.nativeElement.querySelector('input');
        input.dispatchEvent(new Event('blur'));
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

    it('should clear value when clearValue is called', () => {
        component.value = 'some text';
        jest.spyOn(component.valueChange, 'emit');
        jest.spyOn(component.cleared, 'emit');
        component.clearValue();
        expect(component.value).toBe('');
        expect(component.valueChange.emit).toHaveBeenCalledWith('');
        expect(component.cleared.emit).toHaveBeenCalled();
    });

    it('should generate a unique inputId', () => {
        expect(component.inputId).toMatch(/^kit-input-/);
    });

    it('should register onChange callback and invoke it on input', () => {
        const onChangeSpy = jest.fn();
        component.registerOnChange(onChangeSpy);

        const input = fixture.nativeElement.querySelector('input');
        input.value = 'new value';
        input.dispatchEvent(new Event('input'));

        expect(onChangeSpy).toHaveBeenCalledWith('new value');
    });

    it('should register onTouched callback and invoke it on blur', () => {
        const onTouchedSpy = jest.fn();
        component.registerOnTouched(onTouchedSpy);

        const input = fixture.nativeElement.querySelector('input');
        input.dispatchEvent(new Event('blur'));

        expect(onTouchedSpy).toHaveBeenCalled();
    });
});
