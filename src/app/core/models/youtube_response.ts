export interface YouTubeVideoListResponse {
  etag: string;
  items: YouTubeVideo[];
  kind: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface YouTubeVideo {
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
}

export interface Snippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage?: string;
  defaultLanguage?: string;
  description: string;
  liveBroadcastContent: string;
  localized: {
    description: string;
    title: string;
  };
  publishedAt: string;
  tags?: string[];
  thumbnails: Thumbnails;
  title: string;
}

export interface Thumbnails {
  default: Thumbnail;
  high: Thumbnail;
  maxres: Thumbnail;
  medium: Thumbnail;
  standard: Thumbnail;
}

export interface Thumbnail {
  height: number;
  url: string;
  width: number;
}
