export function generateId(prefix: string, length = 9): string {
    return `${prefix}-${Math.random().toString(36).substring(2, 2 + length)}`;
}
