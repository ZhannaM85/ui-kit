import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DropdownComponent, DropdownOption } from './dropdown.component';

describe('DropdownComponent', () => {
    let component: DropdownComponent;
    let fixture: ComponentFixture<DropdownComponent>;

    const mockOptions: DropdownOption[] = [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2' },
        { label: 'Option 3', value: 'opt3' }
    ];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownComponent],
            imports: [CommonModule],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(DropdownComponent);
        component = fixture.componentInstance;
        component.options = mockOptions;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display placeholder when no option is selected', () => {
        component.selectedValue = null;
        component.placeholder = 'Select an option';
        fixture.detectChanges();

        const valueElement = fixture.nativeElement.querySelector('.lib-dropdown__value');
        expect(valueElement.textContent.trim()).toBe('Select an option');
    });

    it('should display selected option label', () => {
        component.selectedValue = 'opt2';
        fixture.detectChanges();

        const valueElement = fixture.nativeElement.querySelector('.lib-dropdown__value');
        expect(valueElement.textContent.trim()).toBe('Option 2');
    });

    it('should toggle dropdown on trigger click', () => {
        expect(component.isOpen).toBe(false);

        const trigger = fixture.nativeElement.querySelector('.lib-dropdown__trigger');
        trigger.click();
        fixture.detectChanges();

        expect(component.isOpen).toBe(true);
    });

    it('should not toggle dropdown when disabled', () => {
        component.disabled = true;
        fixture.detectChanges();

        const trigger = fixture.nativeElement.querySelector('.lib-dropdown__trigger');
        trigger.click();
        fixture.detectChanges();

        expect(component.isOpen).toBe(false);
    });

    it('should emit selectionChange when option is selected', () => {
        jest.spyOn(component.selectionChange, 'emit');

        component.isOpen = true;
        fixture.detectChanges();

        const options = fixture.nativeElement.querySelectorAll('.lib-dropdown__option');
        options[1].click();
        fixture.detectChanges();

        expect(component.selectionChange.emit).toHaveBeenCalledWith('opt2');
        expect(component.isOpen).toBe(false);
    });

    it('should close dropdown after selection', () => {
        component.isOpen = true;
        fixture.detectChanges();

        const options = fixture.nativeElement.querySelectorAll('.lib-dropdown__option');
        options[0].click();
        fixture.detectChanges();

        expect(component.isOpen).toBe(false);
    });

    it('should display all options when open', () => {
        component.isOpen = true;
        fixture.detectChanges();

        const options = fixture.nativeElement.querySelectorAll('.lib-dropdown__option');
        expect(options.length).toBe(3);
    });

    it('should default to empty array when options is set to null', () => {
        component.options = null as unknown as DropdownOption[];
        expect(component.options).toEqual([]);
    });

    it('should show empty message when no options available', () => {
        component.options = [];
        component.isOpen = true;
        fixture.detectChanges();

        const emptyOption = fixture.nativeElement.querySelector('.lib-dropdown__option--empty');
        expect(emptyOption).toBeTruthy();
        expect(emptyOption.textContent.trim()).toBe('No options available');
    });

    it('should update selected option when selectedValue changes', () => {
        component.selectedValue = 'opt1';
        fixture.detectChanges();

        expect(component.selectedOption?.value).toBe('opt1');
        expect(component.selectedOption?.label).toBe('Option 1');
    });

    it('should return selectedValue via getter', () => {
        component.selectedValue = 'opt2';
        expect(component.selectedValue).toBe('opt2');
    });

    it('should close dropdown when clicking outside', () => {
        component.isOpen = true;
        fixture.detectChanges();

        document.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        expect(component.isOpen).toBe(false);
    });

    it('should not close dropdown when clicking inside', () => {
        component.isOpen = true;
        fixture.detectChanges();

        fixture.nativeElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        expect(component.isOpen).toBe(true);
    });

    it('should toggle dropdown on Enter keydown', () => {
        expect(component.isOpen).toBe(false);
        const event = new KeyboardEvent('keydown', { key: 'Enter' });
        jest.spyOn(event, 'preventDefault');

        component.onTriggerKeydown(event);
        expect(event.preventDefault).toHaveBeenCalled();
        expect(component.isOpen).toBe(true);
    });

    it('should toggle dropdown on Space keydown', () => {
        expect(component.isOpen).toBe(false);
        const event = new KeyboardEvent('keydown', { key: ' ' });

        component.onTriggerKeydown(event);
        expect(component.isOpen).toBe(true);
    });

    it('should not toggle dropdown on non-activation key', () => {
        expect(component.isOpen).toBe(false);
        const event = new KeyboardEvent('keydown', { key: 'Tab' });

        component.onTriggerKeydown(event);
        expect(component.isOpen).toBe(false);
    });

    it('should select option on Enter keydown', () => {
        jest.spyOn(component.selectionChange, 'emit');
        const event = new KeyboardEvent('keydown', { key: 'Enter' });
        jest.spyOn(event, 'preventDefault');

        component.onOptionKeydown(event, mockOptions[2]);
        expect(event.preventDefault).toHaveBeenCalled();
        expect(component.selectedOption).toEqual(mockOptions[2]);
        expect(component.selectionChange.emit).toHaveBeenCalledWith('opt3');
    });

    it('should not select option on non-activation key', () => {
        jest.spyOn(component.selectionChange, 'emit');
        const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });

        component.onOptionKeydown(event, mockOptions[1]);
        expect(component.selectionChange.emit).not.toHaveBeenCalled();
    });

    it('should not select option when disabled', () => {
        component.disabled = true;
        jest.spyOn(component.selectionChange, 'emit');

        component.selectOption(mockOptions[0]);

        expect(component.selectionChange.emit).not.toHaveBeenCalled();
        expect(component.selectedOption).not.toEqual(mockOptions[0]);
    });

    it('should remove document listener on destroy', () => {
        jest.spyOn(document, 'removeEventListener');
        component.ngOnDestroy();
        expect(document.removeEventListener).toHaveBeenCalledWith('click', expect.any(Function));
    });
});
