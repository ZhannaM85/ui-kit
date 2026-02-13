import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface NavItem {
  name: string;
  path: string;
  label: string;
}

const COMPONENTS: NavItem[] = [
  { name: 'Button', path: 'button', label: 'Button' },
  { name: 'Dropdown', path: 'dropdown', label: 'Dropdown' },
  { name: 'Checkbox', path: 'checkbox', label: 'Checkbox' },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  template: `
    <div class="sidebar-header">
      <h2 class="sidebar-title">Components</h2>
      <input
        type="text"
        class="sidebar-filter"
        placeholder="Filter components..."
        [ngModel]="filter()"
        (ngModelChange)="filter.set($event)"
      />
    </div>
    <nav class="sidebar-nav">
      @for (item of filteredItems(); track item.path) {
        <a
          [routerLink]="item.path"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: false }"
          class="sidebar-link"
        >
          {{ item.label }}
        </a>
      }
      @if (filteredItems().length === 0) {
        <p class="sidebar-empty">No components match "{{ filter() }}"</p>
      }
    </nav>
  `,
  styles: [`
    .sidebar-header {
      padding: 1.25rem;
      border-bottom: 1px solid #e5e7eb;
    }
    .sidebar-title {
      margin: 0 0 0.75rem 0;
      font-size: 1.125rem;
      font-weight: 600;
      color: #111827;
    }
    .sidebar-filter {
      width: 100%;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      background: #fff;
    }
    .sidebar-filter::placeholder {
      color: #9ca3af;
    }
    .sidebar-filter:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }
    .sidebar-nav {
      padding: 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .sidebar-link {
      display: block;
      padding: 0.5rem 0.75rem;
      font-size: 0.9375rem;
      color: #374151;
      text-decoration: none;
      border-radius: 6px;
      transition: background 0.15s, color 0.15s;
    }
    .sidebar-link:hover {
      background: #f3f4f6;
      color: #111827;
    }
    .sidebar-link.active {
      background: #eff6ff;
      color: #2563eb;
      font-weight: 500;
    }
    .sidebar-empty {
      padding: 0.75rem;
      margin: 0;
      font-size: 0.875rem;
      color: #6b7280;
    }
  `],
})
export class SidebarComponent {
  filter = signal('');
  items = COMPONENTS;

  filteredItems = computed(() => {
    const q = this.filter().trim().toLowerCase();
    if (!q) return this.items;
    return this.items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.label.toLowerCase().includes(q)
    );
  });
}
