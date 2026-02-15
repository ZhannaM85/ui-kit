import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    standalone: false,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    public sidebarOpen = false;

    private readonly router = inject(Router);

    private routerSub!: Subscription;

    public ngOnInit(): void {
        this.routerSub = this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd))
            .subscribe(() => {
                this.sidebarOpen = false;
            });
    }

    public ngOnDestroy(): void {
        this.routerSub?.unsubscribe();
    }

    public toggleSidebar(): void {
        this.sidebarOpen = !this.sidebarOpen;
    }

    public closeSidebar(): void {
        this.sidebarOpen = false;
    }
}
