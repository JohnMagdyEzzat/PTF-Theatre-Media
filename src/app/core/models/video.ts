export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  youtubeID: string;
  thumbnailURL: string;
  created_at: string;
  updated_at: string;
}

export interface VideoDTO {
  id: string;
  title: string;
  description: string;
  youtubeID: string;
  videoUrl: string;
  thumbnailURL: string;
  created_at: string;
  updated_at: string;
}
