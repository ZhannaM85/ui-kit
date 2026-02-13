# Angular UI Kit

A modern, reusable Angular 21 UI component library featuring Button, Dropdown, and Checkbox components. Built with standalone components and designed for easy integration into Angular applications.

## Features

- 🎨 **Modern Design**: Clean, polished UI components with smooth animations
- 📦 **Standalone Components**: Built with Angular 21 standalone components (no NgModules required)
- 🎯 **Type-Safe**: Full TypeScript support with proper typing
- ♿ **Accessible**: Built with accessibility in mind
- 🎨 **Customizable**: Multiple variants and sizes for each component
- 📱 **Responsive**: Works seamlessly across different screen sizes

## Installation

```bash
npm install @yourname/ui-kit
```

**Note**: Replace `@yourname` with your npm username or organization name before publishing.

## Components

### Button Component

A versatile button component with multiple variants and sizes.

#### Usage

```typescript
import { ButtonComponent } from '@yourname/ui-kit';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <lib-button
      label="Click Me"
      variant="primary"
      size="medium"
      (click)="handleClick($event)">
    </lib-button>
  `
})
export class ExampleComponent {
  handleClick(event: MouseEvent) {
    console.log('Button clicked!', event);
  }
}
```

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Button text label |
| `variant` | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Button style variant |
| `disabled` | `boolean` | `false` | Disabled state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `click` | `EventEmitter<MouseEvent>` | Emitted when button is clicked |

### Dropdown Component

A dropdown/select component with customizable options.

#### Usage

```typescript
import { DropdownComponent, DropdownOption } from '@yourname/ui-kit';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [DropdownComponent],
  template: `
    <lib-dropdown
      [options]="options"
      placeholder="Select an option"
      [selectedValue]="selectedValue"
      (selectionChange)="onSelectionChange($event)">
    </lib-dropdown>
  `
})
export class ExampleComponent {
  options: DropdownOption[] = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' }
  ];
  
  selectedValue: any = null;

  onSelectionChange(value: any) {
    this.selectedValue = value;
    console.log('Selected:', value);
  }
}
```

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `options` | `DropdownOption[]` | `[]` | Array of dropdown options |
| `placeholder` | `string` | `'Select an option'` | Placeholder text |
| `selectedValue` | `any` | `null` | Currently selected value |
| `disabled` | `boolean` | `false` | Disabled state |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `selectionChange` | `EventEmitter<any>` | Emitted when selection changes |

#### Types

```typescript
interface DropdownOption {
  label: string;
  value: any;
}
```

### Checkbox Component

A checkbox component with label support and indeterminate state.

#### Usage

```typescript
import { CheckboxComponent } from '@yourname/ui-kit';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <lib-checkbox
      label="Accept terms and conditions"
      [checked]="isChecked"
      (checkedChange)="onCheckedChange($event)">
    </lib-checkbox>
  `
})
export class ExampleComponent {
  isChecked: boolean = false;

  onCheckedChange(checked: boolean) {
    this.isChecked = checked;
    console.log('Checked:', checked);
  }
}
```

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Checkbox label text |
| `checked` | `boolean` | `false` | Checked state |
| `disabled` | `boolean` | `false` | Disabled state |
| `indeterminate` | `boolean` | `false` | Indeterminate state (shows dash) |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `checkedChange` | `EventEmitter<boolean>` | Emitted when checked state changes |

## Development

### Prerequisites

- Node.js (v18.19.1, v20.11.1, or v22+)
- npm (v9 or higher)
- Angular CLI 21

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd ui-kit
```

2. Install dependencies:
```bash
npm install
```

3. Build the library:
```bash
npm run build
```

The built library will be in the `dist/ui-kit` directory.

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

## Publishing to npm

1. Update the package name in `package.json` with your npm username/organization
2. Build the library:
```bash
npm run build
```

3. Navigate to the dist directory:
```bash
cd dist/ui-kit
```

4. Publish to npm:
```bash
npm publish
```

For scoped packages (starting with `@`), use:
```bash
npm publish --access public
```

## Using in Your Application

After installing the package:

1. Import the components in your Angular component:
```typescript
import { ButtonComponent, DropdownComponent, CheckboxComponent } from '@yourname/ui-kit';
```

2. Add them to your component's `imports` array (standalone components):
```typescript
@Component({
  standalone: true,
  imports: [ButtonComponent, DropdownComponent, CheckboxComponent],
  // ...
})
```

3. Use them in your template:
```html
<lib-button label="Submit" variant="primary" (click)="onSubmit()"></lib-button>
<lib-dropdown [options]="myOptions" (selectionChange)="onChange($event)"></lib-dropdown>
<lib-checkbox label="I agree" [checked]="agreed" (checkedChange)="onAgreeChange($event)"></lib-checkbox>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Version

Current version: 0.1.0
