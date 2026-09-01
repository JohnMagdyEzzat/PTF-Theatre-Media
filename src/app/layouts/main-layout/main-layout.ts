import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchBar } from '../../shared/components/search-bar/search-bar';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SearchBar],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {
  sidebarOpen = false;

  userName = 'Your Name';
  userInitial = 'Y';

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  openSearch(): void {
    // Later: open mobile search UI
  }
}
