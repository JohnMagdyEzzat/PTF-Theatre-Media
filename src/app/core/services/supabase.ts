import { Service } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Video, VideoDTO } from '../models/video';
import { environment } from '../../../environments/environment';

@Service()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async getVideos() {
    const { data, error } = await this.supabase.from('videos').select('*');
    if (error) {
      console.error('Supabase connection failed:', error.message);
      throw error;
    }

    return data;
  }

  async addVideo(video: Video) {
    const { videoUrl, ...videoDataRest } = video;
    const videoIDRegxArr = videoUrl.match('[?&]v=([^&#]+)');

    if (!videoIDRegxArr) {
      throw 'Youtube url is missing';
    }

    const youtube_id = videoIDRegxArr[1];

    let videoToAdd: VideoDTO = {
      ...video,
      youtubeID: youtube_id,
    };
    const { data, error } = await this.supabase.from('videos').insert([videoToAdd]);

    if (error) throw error;
    return data;
  }
}
