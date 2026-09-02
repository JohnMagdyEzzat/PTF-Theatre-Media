export interface Video {
  id: string;
  title: string;
  description: string;
  youtube_url: string;
  youtube_id: string;
  thumbnail_url: string;
  duration_seconds: number;
  created_at: string;
  updated_at: string;
}

export interface VideoDTO {
  id: string;
  title: string;
  description: string;
  youtube_id: string;
  thumbnail_url: string;
  duration_seconds: number;
  created_at: string;
  updated_at: string;
}
