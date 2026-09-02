import { Component, signal } from '@angular/core';
import { VideoCard } from '../video-card/video-card';
import { Video } from '../../../core/models/video';
import { SupabaseService } from '../../../core/services/supabase';

@Component({
  imports: [VideoCard],
  selector: 'app-video-list',
  styleUrl: './video-list.css',
  templateUrl: './video-list.html',
})
export class VideoList {
  videos = signal<Video[]>([]);
  constructor(private supabase: SupabaseService) {}

  async ngOnInit() {
    this.videos.set(await this.supabase.getVideos());
  }
}
