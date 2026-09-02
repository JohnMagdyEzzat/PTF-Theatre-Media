import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-topbar-actions',
  styleUrl: './topbar-actions.css',
  templateUrl: './topbar-actions.html',
})
export class TopbarActions {
  userName = 'Your Name';
  userInitial = 'Y';

  constructor(private router: Router) {}

  openSearch(): void {
    // Later: open mobile search UI
  }
  addVideo(): void {
    localStorage.setItem('recentURL', this.router.url);
  }
}
