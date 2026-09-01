import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar {
  search(query: string): void {
    const value = query.trim();

    if (!value) {
      return;
    }

    // Later: navigate to your search feature
    // this.router.navigate(['/search'], {
    //   queryParams: { q: value }
    // });
  }
}
