import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeUrlPipe } from '../../../shared/pipes/safe-url-pipe';

@Component({
  imports: [SafeUrlPipe],
  selector: 'app-video-player',
  styleUrl: './video-player.css',
  templateUrl: './video-player.html',
})
export class VideoPlayer {
  youtube_id: string = '';
  router = inject(Router);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.youtube_id = this.route.snapshot.paramMap.get('id') || '';
  }

  goBack() {
    this.router.navigate(['videos']);
  }
}
