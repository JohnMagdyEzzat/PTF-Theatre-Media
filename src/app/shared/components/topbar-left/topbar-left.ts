import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-topbar-left',
  styleUrl: './topbar-left.css',
  templateUrl: './topbar-left.html',
})
export class TopbarLeft {
  sidebarOpen = input.required<boolean>();
  sidebarOpenChange = output<boolean>();

  toggleSidebar(): void {
    this.sidebarOpenChange.emit(!this.sidebarOpen());
  }
}
