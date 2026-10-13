import { videoServiceEnum } from '../../core/enums/video-service-enum';

export class URLUtils {
  static getVideoService(videoUrl: string): string {
    const googleDrivePattern =
      /^https:\/\/(?:www\.)?drive\.google\.com\/file\/d\/[a-zA-Z0-9_-]+\/view$/;
    const youtubePattern = /^https:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;

    let videoService: string = '';
    if (googleDrivePattern.test(videoUrl)) {
      videoService = videoServiceEnum.GoogleDrive;
    } else if (youtubePattern.test(videoUrl)) {
      videoService = videoServiceEnum.YouTube;
    }

    return videoService;
  }
}
