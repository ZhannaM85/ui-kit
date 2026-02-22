import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
    let component: CheckboxComponent;
    let fixture: ComponentFixture<CheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CheckboxComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display label when provided', () => {
        component.label = 'Test Checkbox';
        fixture.detectChanges();

        const labelElement = fixture.nativeElement.querySelector('.lib-checkbox__label');
        expect(labelElement).toBeTruthy();
        expect(labelElement.textContent.trim()).toBe('Test Checkbox');
    });

    it('should not display label when empty', () => {
        component.label = '';
        fixture.detectChanges();

        const labelElement = fixture.nativeElement.querySelector('.lib-checkbox__label');
        expect(labelElement).toBeFalsy();
    });

    it('should set checked state', () => {
        component.checked = true;
        fixture.detectChanges();

        const inputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
        expect(inputElement.checked).toBe(true);
    });

    it('should set disabled state', () => {
        component.disabled = true;
        fixture.detectChanges();

        const inputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
        expect(inputElement.disabled).toBe(true);
    });

    it('should set indeterminate state', () => {
        component.indeterminate = true;
        fixture.detectChanges();

        const inputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
        expect(inputElement.indeterminate).toBe(true);
    });

    it('should emit checkedChange when checkbox is clicked', () => {
        jest.spyOn(component.checkedChange, 'emit');
        component.checked = false;
        component.disabled = false;
        fixture.detectChanges();

        const inputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
        inputElement.click();
        fixture.detectChanges();

        expect(component.checkedChange.emit).toHaveBeenCalledWith(true);
    });

    it('should not emit checkedChange when disabled', () => {
        jest.spyOn(component.checkedChange, 'emit');
        component.disabled = true;
        component.checked = false;

        const mockEvent = { target: { checked: true } } as unknown as Event;
        component.onCheckboxChange(mockEvent);

        expect(component.checked).toBe(false);
        expect(component.checkedChange.emit).not.toHaveBeenCalled();
    });

    it('should clear indeterminate state when user interacts', () => {
        component.indeterminate = true;
        component.checked = false;
        component.disabled = false;
        fixture.detectChanges();

        const inputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
        inputElement.click();
        fixture.detectChanges();

        expect(component.indeterminate).toBe(false);
    });

    it('should update checked state when input changes', () => {
        component.checked = false;
        component.disabled = false;
        fixture.detectChanges();

        const inputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
        inputElement.click();
        fixture.detectChanges();

        expect(component.checked).toBe(true);
    });

    it('should have a stable unique checkbox ID per instance', () => {
        const id1 = component.checkboxId;
        const id2 = component.checkboxId;

        expect(id1).toBeTruthy();
        expect(id2).toBe(id1);
        expect(id1).toMatch(/^kit-checkbox-[a-z0-9]+$/);
    });
});
