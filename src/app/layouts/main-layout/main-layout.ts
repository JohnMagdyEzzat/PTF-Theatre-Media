import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchBar } from '../../shared/components/search-bar/search-bar';
import { TopbarActions } from '../../shared/components/topbar-actions/topbar-actions';
import { TopbarLeft } from '../../shared/components/topbar-left/topbar-left';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SearchBar, TopbarActions, TopbarLeft],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {
  sidebarOpen = false;
  private router = inject(Router);

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  addVideo(): void {
    localStorage.setItem('recentURL', this.router.url);
  }
}
