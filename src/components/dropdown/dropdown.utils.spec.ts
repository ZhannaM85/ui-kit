import { findSelectedOption, isActivationKey } from './dropdown.utils';
import { DropdownOption } from './dropdown.component';

describe('findSelectedOption', () => {
    const options: DropdownOption[] = [
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three', value: 'three' },
    ];

    it('should return the matching option by value', () => {
        expect(findSelectedOption(options, 2)).toEqual({ label: 'Two', value: 2 });
    });

    it('should return null when value is null', () => {
        expect(findSelectedOption(options, null)).toBeNull();
    });

    it('should return null when value is undefined', () => {
        expect(findSelectedOption(options, undefined)).toBeNull();
    });

    it('should return null when no option matches', () => {
        expect(findSelectedOption(options, 999)).toBeNull();
    });

    it('should return null for an empty options array', () => {
        expect(findSelectedOption([], 1)).toBeNull();
    });

    it('should match string values correctly', () => {
        expect(findSelectedOption(options, 'three')).toEqual({ label: 'Three', value: 'three' });
    });
});

describe('isActivationKey', () => {
    it('should return true for Enter', () => {
        expect(isActivationKey('Enter')).toBe(true);
    });

    it('should return true for Space', () => {
        expect(isActivationKey(' ')).toBe(true);
    });

    it('should return false for other keys', () => {
        expect(isActivationKey('Tab')).toBe(false);
        expect(isActivationKey('Escape')).toBe(false);
        expect(isActivationKey('ArrowDown')).toBe(false);
        expect(isActivationKey('a')).toBe(false);
    });
});
