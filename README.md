# Angular UI Kit

A modern, reusable Angular 21 UI component library featuring Button, Input, Textarea, Dropdown, Checkbox, Notification, and Icon components. Built with NgModules and designed for easy integration into Angular applications.

**Live demo:** [https://zhannam85.github.io/ui-kit](https://zhannam85.github.io/ui-kit)

**npm package:** [@zhannam85/ui-kit](https://www.npmjs.com/package/@zhannam85/ui-kit)

## Features

- **Modern Design** — Clean, polished UI components with smooth animations
- **NgModule Architecture** — Each component ships with its own Angular module for straightforward imports
- **Type-Safe** — Full TypeScript support with proper typing
- **Accessible** — Built with accessibility in mind
- **Customizable** — Multiple variants and sizes for each component
- **Responsive** — Works seamlessly across different screen sizes
- **Forms Integration** — Input and Textarea implement `ControlValueAccessor` for Reactive and Template-driven forms

## Installation

```bash
npm install @zhannam85/ui-kit
```

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Usage

```typescript
import { ButtonModule } from '@zhannam85/ui-kit';

@NgModule({
  imports: [ButtonModule],
})
export class MyModule {}
```

```html
<kit-button
  label="Click Me"
  variant="primary"
  size="medium"
  (buttonClicked)="handleClick($event)">
</kit-button>
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
| `buttonClicked` | `EventEmitter<MouseEvent>` | Emitted when button is clicked |

---

### Input

A text input component with validation support, clearable option, and Angular forms integration (`ControlValueAccessor`).

#### Usage

```typescript
import { InputModule } from '@zhannam85/ui-kit';

@NgModule({
  imports: [InputModule],
})
export class MyModule {}
```

```html
<kit-input
  label="Email"
  placeholder="Enter your email"
  type="email"
  [required]="true"
  [clearable]="true"
  hint="We'll never share your email"
  (valueChange)="onValueChange($event)"
  (cleared)="onCleared()">
</kit-input>
```

Use with Reactive Forms:

```html
<kit-input label="Name" [formControl]="nameControl"></kit-input>
```

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Input label text |
| `placeholder` | `string` | `''` | Placeholder text |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | `'text'` | HTML input type |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Required state |
| `clearable` | `boolean` | `false` | Show a clear button when input has a value |
| `error` | `string` | `''` | Error message displayed below the input |
| `hint` | `string` | `''` | Hint text displayed below the input |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `valueChange` | `EventEmitter<string>` | Emitted when the value changes |
| `blurred` | `EventEmitter<FocusEvent>` | Emitted when the input loses focus |
| `cleared` | `EventEmitter<void>` | Emitted when the clear button is clicked |

---

### Textarea

A textarea component with Angular forms integration (`ControlValueAccessor`).

#### Usage

```typescript
import { TextareaModule } from '@zhannam85/ui-kit';

@NgModule({
  imports: [TextareaModule],
})
export class MyModule {}
```

```html
<kit-textarea
  label="Description"
  placeholder="Enter a description"
  [rows]="6"
  hint="Max 500 characters"
  (valueChange)="onValueChange($event)">
</kit-textarea>
```

Use with Reactive Forms:

```html
<kit-textarea label="Bio" [formControl]="bioControl"></kit-textarea>
```

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Textarea label text |
| `placeholder` | `string` | `''` | Placeholder text |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Required state |
| `error` | `string` | `''` | Error message displayed below the textarea |
| `hint` | `string` | `''` | Hint text displayed below the textarea |
| `rows` | `number` | `4` | Number of visible text rows |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `valueChange` | `EventEmitter<string>` | Emitted when the value changes |
| `blurred` | `EventEmitter<FocusEvent>` | Emitted when the textarea loses focus |

---

### Dropdown

A dropdown/select component with customizable options.

#### Usage

```typescript
import { DropdownModule, DropdownOption } from '@zhannam85/ui-kit';

@NgModule({
  imports: [DropdownModule],
})
export class MyModule {}
```

```typescript
@Component({ /* ... */ })
export class ExampleComponent {
  options: DropdownOption[] = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
  ];

  selectedValue: any = null;

  onSelectionChange(value: any) {
    this.selectedValue = value;
  }
}
```

```html
<kit-dropdown
  [options]="options"
  placeholder="Select an option"
  [selectedValue]="selectedValue"
  (selectionChange)="onSelectionChange($event)">
</kit-dropdown>
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

---

### Checkbox

A checkbox component with label support and indeterminate state.

#### Usage

```typescript
import { CheckboxModule } from '@zhannam85/ui-kit';

@NgModule({
  imports: [CheckboxModule],
})
export class MyModule {}
```

```html
<kit-checkbox
  label="Accept terms and conditions"
  [checked]="isChecked"
  (checkedChange)="onCheckedChange($event)">
</kit-checkbox>
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

---

### Notification

A toast notification system with auto-dismiss, action buttons, and stacking support.

#### Setup

Import the module and place the container component in your root template:

```typescript
import { NotificationModule } from '@zhannam85/ui-kit';

@NgModule({
  imports: [NotificationModule],
})
export class AppModule {}
```

```html
<!-- app.component.html -->
<kit-notification-container></kit-notification-container>
<router-outlet></router-outlet>
```

#### Usage

Inject `NotificationService` and call its methods:

```typescript
import { NotificationService } from '@zhannam85/ui-kit';

@Component({ /* ... */ })
export class ExampleComponent {
  constructor(private notificationService: NotificationService) {}

  showSuccess() {
    this.notificationService.success('Record saved successfully.');
  }

  showWarning() {
    this.notificationService.warning('Session is about to expire.', {
      duration: 10000,
    });
  }

  showError() {
    this.notificationService.error('Failed to load data.', {
      actionLabel: 'Retry',
      actionCallback: () => this.reload(),
    });
  }
}
```

#### NotificationService Methods

| Method | Arguments | Description |
|--------|-----------|-------------|
| `show` | `message: string, type: NotificationType, options?: NotificationOptions` | Show a notification |
| `success` | `message: string, options?: NotificationOptions` | Show a success notification |
| `warning` | `message: string, options?: NotificationOptions` | Show a warning notification |
| `error` | `message: string, options?: NotificationOptions` | Show an error notification |
| `dismiss` | `id: string` | Dismiss a notification by ID |

#### Types

```typescript
type NotificationType = 'success' | 'warning' | 'error';

interface NotificationOptions {
  duration?: number;        // Auto-dismiss time in ms (default: 20000)
  actionLabel?: string;     // Label for an optional action button
  actionCallback?: () => void;
}

interface KitNotification {
  id: string;
  message: string;
  type: NotificationType;
  duration: number;
  actionLabel?: string;
  actionCallback?: () => void;
}
```

Maximum 5 notifications are visible at a time.

---

### Icon Components

Reusable SVG icon components with customizable size and color. All icons extend `BaseIconComponent` and are bundled in `IconModule`.

#### Usage

```typescript
import { IconModule } from '@zhannam85/ui-kit';

@NgModule({
  imports: [IconModule],
})
export class MyModule {}
```

```html
<kit-icon-copy [size]="16" color="#333"></kit-icon-copy>
<kit-icon-check [size]="20"></kit-icon-check>
<kit-icon-close [size]="24" color="red"></kit-icon-close>
```

#### Available Icons

| Component | Selector | Default Size |
|-----------|----------|:------------:|
| `IconCopyComponent` | `kit-icon-copy` | 16 |
| `IconCheckComponent` | `kit-icon-check` | 16 |
| `IconChevronDownComponent` | `kit-icon-chevron-down` | 12 |
| `IconCloseComponent` | `kit-icon-close` | 20 |
| `IconSortAscComponent` | `kit-icon-sort-asc` | 12 |
| `IconSortDescComponent` | `kit-icon-sort-desc` | 12 |
| `IconCheckCircleComponent` | `kit-icon-check-circle` | 20 |
| `IconAlertTriangleComponent` | `kit-icon-alert-triangle` | 20 |
| `IconXCircleComponent` | `kit-icon-x-circle` | 20 |

#### Inputs (shared by all icons)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `number` | varies per icon | Width and height in pixels |
| `color` | `string` | `'currentColor'` | Stroke/fill color (inherits text color by default) |

#### Adding a New Icon

1. Create a new file in `src/components/icon/`, e.g. `icon-arrow-right.component.ts`:

```typescript
import { Component } from '@angular/core';
import { BaseIconComponent } from './base-icon.component';

@Component({
    selector: 'kit-icon-arrow-right',
    standalone: false,
    template: `
        <svg
            [attr.width]="size"
            [attr.height]="size"
            viewBox="0 0 24 24"
            fill="none"
            [attr.stroke]="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
    `,
})
export class IconArrowRightComponent extends BaseIconComponent {
    override size = 16;
}
```

2. Register the component in `src/components/icon/icon.module.ts`:

```typescript
import { IconArrowRightComponent } from './icon-arrow-right.component';

const ICON_COMPONENTS = [
    // ...existing icons
    IconArrowRightComponent,
];
```

3. Export it from `src/public-api.ts`:

```typescript
export * from './components/icon/icon-arrow-right.component';
```

4. Rebuild the library (`npm run build`) and use it:

```html
<kit-icon-arrow-right [size]="20" color="blue"></kit-icon-arrow-right>
```

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

### Sandbox (Local Preview)

Run the sandbox app to preview components in the browser:

```bash
npm start
```

This builds the library, clears the Angular cache, and serves the sandbox at **http://localhost:4200**. The sandbox has a left sidebar listing components (with a filter) and a main area showing each component's showcase.

**Proxy:** API requests to `/api` are proxied to `http://localhost:3000` by default. Edit `proxy.conf.json` to change the target.

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

## Publishing to npm

1. Update the package name in `package.json` with your npm username/organization.
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

Alternatively, use the release script which bumps the version, builds, publishes, and commits:

```bash
npm run release
```

## Using in Your Application

After installing the package, import the modules you need:

```typescript
import { ButtonModule, DropdownModule, CheckboxModule, InputModule, TextareaModule, NotificationModule, IconModule } from '@zhannam85/ui-kit';

@NgModule({
  imports: [
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    InputModule,
    TextareaModule,
    NotificationModule,
    IconModule,
  ],
})
export class MyFeatureModule {}
```

Then use the components in your templates:

```html
<kit-button label="Submit" variant="primary" (buttonClicked)="onSubmit()"></kit-button>
<kit-input label="Name" placeholder="Enter name" (valueChange)="onNameChange($event)"></kit-input>
<kit-textarea label="Notes" [rows]="5"></kit-textarea>
<kit-dropdown [options]="myOptions" (selectionChange)="onChange($event)"></kit-dropdown>
<kit-checkbox label="I agree" [checked]="agreed" (checkedChange)="onAgreeChange($event)"></kit-checkbox>
<kit-notification-container></kit-notification-container>
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

Current version: 0.1.13
