import { Service } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Video, VideoDTO } from '../models/video';

@Service()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://onzhqeumxmuqbsfmyikf.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uemhxZXVteG11cWJzZm15aWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMzc0MTgsImV4cCI6MjEwMzkxMzQxOH0.g_I4sZpMkfXwL3Fqzt8-d9WPzxkGT8Kx67Vc3gLvyjI',
    );
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
    const { youtube_url, ...videoDataRest } = video;
    const youtube_id_regxArr = youtube_url.match('[?&]v=([^&#]+)');

    if (!youtube_id_regxArr) {
      throw 'Youtube url is missing';
    }

    const youtube_id = youtube_id_regxArr[1];

    let videoToAdd: VideoDTO = {
      ...videoDataRest,
      youtube_id,
    };
    const { data, error } = await this.supabase.from('videos').insert([videoToAdd]);
    if (error) throw error;
    return data;
  }
}
