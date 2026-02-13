import { Component } from '@angular/core';

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
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  filter = '';
  items = COMPONENTS;

  get filteredItems(): NavItem[] {
    const q = this.filter.trim().toLowerCase();
    if (!q) return this.items;
    return this.items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.label.toLowerCase().includes(q)
    );
  }

  trackByPath(_index: number, item: NavItem): string {
    return item.path;
  }
}
