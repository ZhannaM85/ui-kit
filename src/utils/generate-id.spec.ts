import { generateId } from './generate-id';

describe('generateId', () => {
    it('should return a string starting with the given prefix', () => {
        const id = generateId('kit-input');
        expect(id.startsWith('kit-input-')).toBe(true);
    });

    it('should generate unique IDs on each call', () => {
        const ids = new Set(Array.from({ length: 100 }, () => generateId('test')));
        expect(ids.size).toBe(100);
    });

    it('should use the default length of 9 for the random part', () => {
        const id = generateId('prefix');
        const randomPart = id.replace('prefix-', '');
        expect(randomPart.length).toBeLessThanOrEqual(9);
        expect(randomPart.length).toBeGreaterThan(0);
    });

    it('should respect a custom length parameter', () => {
        const id = generateId('p', 5);
        const randomPart = id.replace('p-', '');
        expect(randomPart.length).toBeLessThanOrEqual(5);
        expect(randomPart.length).toBeGreaterThan(0);
    });

    it('should only contain alphanumeric characters in the random part', () => {
        const id = generateId('kit');
        const randomPart = id.replace('kit-', '');
        expect(randomPart).toMatch(/^[a-z0-9]+$/);
    });
});
