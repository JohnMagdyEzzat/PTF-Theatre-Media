import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YouTubeVideoListResponse } from '../models/youtube_response';
import { environment } from '../../../environments/environment';

@Service()
export class GoogleService {
  private http = inject(HttpClient);
  private apiKey = environment.googleAPIKey;
  getDriveVideoDetails(fileId: string) {
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?fields=name&key=${this.apiKey}`;

    return this.http.get<{ name: string }>(url);
  }
  getYouTubeVideoDetails(videoId: string) {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${this.apiKey}`;
    return this.http.get<YouTubeVideoListResponse>(url);
  }
}
