import { videoServiceEnum } from '../../core/enums/video-service-enum';

export class FileUtils {
  static extractFileId(url: string, videoService: string) {
    let id: string | null = null;
    switch (videoService) {
      case videoServiceEnum.GoogleDrive:
        const GDMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)\//);
        id = GDMatch ? GDMatch[1] : null;
        break;
      case videoServiceEnum.YouTube:
        const YTMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
        id = YTMatch ? YTMatch[1] : null;
        break;
    }
    return id;
  }
}
