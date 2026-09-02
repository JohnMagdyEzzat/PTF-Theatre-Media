import { Component, input } from '@angular/core';
import { Video } from '../../../core/models/video';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'app-video-card',
  styleUrl: './video-card.css',
  templateUrl: './video-card.html',
})
export class VideoCard {
  video = input.required<Video>();
  constructor(private router: Router) {}
  openVideo() {
    const youtube_id = this.video().youtube_id;
    this.router.navigate(['/video/' + youtube_id]);
  }
}
