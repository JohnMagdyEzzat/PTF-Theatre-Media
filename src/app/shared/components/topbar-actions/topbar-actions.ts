import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-topbar-actions',
  styleUrl: './topbar-actions.css',
  templateUrl: './topbar-actions.html',
})
export class TopbarActions {
  userName = 'Your Name';
  userInitial = 'Y';
  openSearch(): void {
    // Later: open mobile search UI
  }
}
