import { DropdownOption } from './dropdown.model';

export function findSelectedOption(options: DropdownOption[], value: unknown): DropdownOption | null {
    if (value === null || value === undefined) {
        return null;
    }
    return options.find(opt => opt.value === value) || null;
}

export function isActivationKey(key: string): boolean {
    return key === 'Enter' || key === ' ';
}
