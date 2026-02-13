import { ComponentFixture, TestBed } from '@angular/core/testing';
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
      imports: [DropdownComponent]
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
    spyOn(component.selectionChange, 'emit');
    
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
});
