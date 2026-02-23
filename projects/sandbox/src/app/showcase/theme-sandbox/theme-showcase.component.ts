import { Component, OnDestroy } from '@angular/core';
import { DropdownOption } from '@zhannam85/ui-kit';
import { ClipboardService } from '../../services/clipboard.service';

type ThemeName = 'default' | 'dark' | 'pink' | 'green';

interface ThemeDefinition {
    name: ThemeName;
    label: string;
    vars: Record<string, string>;
}

const THEMES: ThemeDefinition[] = [
    {
        name: 'default',
        label: 'Default (no variables)',
        vars: {},
    },
    {
        name: 'dark',
        label: 'Dark',
        vars: {
            '--kit-color-primary': '#38bdf8',
            '--kit-color-primary-hover': '#7dd3fc',
            '--kit-color-primary-rgb': '56, 189, 248',
            '--kit-color-secondary': '#64748b',
            '--kit-color-secondary-hover': '#94a3b8',
            '--kit-color-secondary-rgb': '100, 116, 139',
            '--kit-color-danger': '#f87171',
            '--kit-color-danger-hover': '#fca5a5',
            '--kit-color-danger-rgb': '248, 113, 113',
            '--kit-color-bg': '#1e293b',
            '--kit-color-surface': '#1e293b',
            '--kit-color-text': '#e2e8f0',
            '--kit-color-text-secondary': '#94a3b8',
            '--kit-color-text-placeholder': '#64748b',
            '--kit-color-border': '#475569',
            '--kit-color-border-light': '#334155',
            '--kit-color-hover-bg': '#334155',
            '--kit-color-selected-bg': '#1e3a5f',
            '--kit-color-divider': '#334155',
        },
    },
    {
        name: 'pink',
        label: 'Pink',
        vars: {
            '--kit-color-primary': '#ec4899',
            '--kit-color-primary-hover': '#db2777',
            '--kit-color-primary-rgb': '236, 72, 153',
            '--kit-color-secondary': '#6b7280',
            '--kit-color-secondary-hover': '#4b5563',
            '--kit-color-secondary-rgb': '107, 114, 128',
            '--kit-color-danger': '#ef4444',
            '--kit-color-danger-hover': '#dc2626',
            '--kit-color-danger-rgb': '239, 68, 68',
            '--kit-color-bg': '#ffffff',
            '--kit-color-surface': '#ffffff',
            '--kit-color-text': '#1e293b',
            '--kit-color-text-secondary': '#6b7280',
            '--kit-color-text-placeholder': '#9ca3af',
            '--kit-color-border': '#f9a8d4',
            '--kit-color-border-light': '#fbcfe8',
            '--kit-color-hover-bg': '#fce7f3',
            '--kit-color-selected-bg': '#fce7f3',
            '--kit-color-divider': '#fce7f3',
        },
    },
    {
        name: 'green',
        label: 'Green',
        vars: {
            '--kit-color-primary': '#16a34a',
            '--kit-color-primary-hover': '#15803d',
            '--kit-color-primary-rgb': '22, 163, 74',
            '--kit-color-secondary': '#6b7280',
            '--kit-color-secondary-hover': '#4b5563',
            '--kit-color-secondary-rgb': '107, 114, 128',
            '--kit-color-danger': '#ef4444',
            '--kit-color-danger-hover': '#dc2626',
            '--kit-color-danger-rgb': '239, 68, 68',
            '--kit-color-bg': '#ffffff',
            '--kit-color-surface': '#ffffff',
            '--kit-color-text': '#1e293b',
            '--kit-color-text-secondary': '#6b7280',
            '--kit-color-text-placeholder': '#9ca3af',
            '--kit-color-border': '#86efac',
            '--kit-color-border-light': '#bbf7d0',
            '--kit-color-hover-bg': '#dcfce7',
            '--kit-color-selected-bg': '#dcfce7',
            '--kit-color-divider': '#dcfce7',
        },
    },
];

@Component({
    selector: 'app-theme-showcase',
    standalone: false,
    templateUrl: './theme-showcase.component.html',
    styleUrls: ['./theme-showcase.component.scss'],
})
export class ThemeShowcaseComponent implements OnDestroy {
    public themes = THEMES;
    public activeTheme: ThemeDefinition = THEMES[0];
    public copied = false;

    public dropdownOptions: DropdownOption[] = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
    ];
    public selectedFruit = 'apple';

    public checkboxChecked = true;
    public inputValue = '';

    constructor(private readonly clipboard: ClipboardService) {}

    public ngOnDestroy(): void {
        this.clearThemeVars();
    }

    public selectTheme(theme: ThemeDefinition): void {
        this.activeTheme = theme;
        this.applyThemeVars(theme);
    }

    public get cssCode(): string {
        if (Object.keys(this.activeTheme.vars).length === 0) {
            return '/* No custom properties needed — components use built-in fallback colors. */';
        }
        const lines = Object.entries(this.activeTheme.vars)
            .map(([key, value]) => `    ${key}: ${value};`)
            .join('\n');
        return `:root {\n${lines}\n}`;
    }

    public copyCode(): void {
        this.copied = true;
        this.clipboard.copy(this.cssCode).then(() => {
            setTimeout(() => (this.copied = false), 2000);
        });
    }

    private applyThemeVars(theme: ThemeDefinition): void {
        this.clearThemeVars();
        const root = document.documentElement;
        for (const [key, value] of Object.entries(theme.vars)) {
            root.style.setProperty(key, value);
        }
    }

    private clearThemeVars(): void {
        const root = document.documentElement;
        for (const theme of THEMES) {
            for (const key of Object.keys(theme.vars)) {
                root.style.removeProperty(key);
            }
        }
    }
}
