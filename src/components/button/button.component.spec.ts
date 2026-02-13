import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the label', () => {
        component.label = 'Test Button';
        fixture.detectChanges();
        const buttonElement = fixture.nativeElement.querySelector('button');
        expect(buttonElement.textContent.trim()).toBe('Test Button');
    });

    it('should apply primary variant by default', () => {
        const buttonElement = fixture.nativeElement.querySelector('button');
        expect(buttonElement.classList.contains('lib-button--primary')).toBe(true);
    });

    it('should apply correct variant class', () => {
        component.variant = 'danger';
        fixture.detectChanges();
        const buttonElement = fixture.nativeElement.querySelector('button');
        expect(buttonElement.classList.contains('lib-button--danger')).toBe(true);
    });

    it('should apply correct size class', () => {
        component.size = 'large';
        fixture.detectChanges();
        const buttonElement = fixture.nativeElement.querySelector('button');
        expect(buttonElement.classList.contains('lib-button--large')).toBe(true);
    });

    it('should set disabled attribute when disabled is true', () => {
        component.disabled = true;
        fixture.detectChanges();
        const buttonElement = fixture.nativeElement.querySelector('button');
        expect(buttonElement.disabled).toBe(true);
    });

    it('should set correct type attribute', () => {
        component.type = 'submit';
        fixture.detectChanges();
        const buttonElement = fixture.nativeElement.querySelector('button');
        expect(buttonElement.type).toBe('submit');
    });

    it('should emit click event when clicked and not disabled', () => {
        jest.spyOn(component.buttonClicked, 'emit');
        component.disabled = false;
        fixture.detectChanges();

        const buttonElement = fixture.nativeElement.querySelector('button');
        buttonElement.click();

        expect(component.buttonClicked.emit).toHaveBeenCalled();
    });

    it('should not emit click event when disabled', () => {
        jest.spyOn(component.buttonClicked, 'emit');
        component.disabled = true;
        fixture.detectChanges();

        const buttonElement = fixture.nativeElement.querySelector('button');
        buttonElement.click();

        expect(component.buttonClicked.emit).not.toHaveBeenCalled();
    });
});
