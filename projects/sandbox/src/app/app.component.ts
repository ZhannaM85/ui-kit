import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="layout">
      <aside class="sidebar">
        <app-sidebar></app-sidebar>
      </aside>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .layout {
      display: flex;
      min-height: 100vh;
    }
    .sidebar {
      width: 260px;
      flex-shrink: 0;
      background: #fff;
      border-right: 1px solid #e5e7eb;
      box-shadow: 1px 0 0 0 #f3f4f6;
    }
    .content {
      flex: 1;
      padding: 2rem;
      overflow: auto;
    }
  `],
})
export class AppComponent {}
