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
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
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
