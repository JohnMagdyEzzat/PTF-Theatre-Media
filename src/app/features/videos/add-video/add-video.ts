import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupabaseService } from '../../../core/services/supabase';
import { Video } from '../../../core/models/video';
import { Router } from '@angular/router';
import { urlValidator } from '../../../shared/validators/url.validator';
import { GoogleService } from '../../../core/services/google';
import { FileUtils } from '../../../shared/utils/file-utils';
import { firstValueFrom, map } from 'rxjs';
import { URLUtils } from '../../../shared/utils/url-utils';
import { videoServiceEnum } from '../../../core/enums/video-service-enum';
import { ErrorsEnum } from '../../../core/enums/errors-enum';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-add-video',
  styleUrl: './add-video.css',
  templateUrl: './add-video.html',
})
export class AddVideo {
  videoForm!: FormGroup;
  saving = false;
  categories = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Python' },
  ];
  urlService = '';

  private googleService = inject(GoogleService);

  constructor(
    private fb: FormBuilder,
    private supabaseService: SupabaseService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.videoForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      // category_id: [''],
      // level: [''],
      videoUrl: ['', [Validators.required, urlValidator]],
      videoService: [{ value: '', disabled: true }, [Validators.required]],
      thumbnailURL: [''],
      // tags: [''],
    });
  }

  submit(): void {
    if (this.videoForm.valid) {
      this.saving = true;
      const videoData: Video = this.videoForm.getRawValue();
      this.supabaseService.addVideo(videoData);
      this.router.navigate(['/videos']);
    }
  }

  goBack(): void {
    const backURL = localStorage.getItem('recentURL') || 'videos';
    localStorage.removeItem('recentURL');
    this.router.navigateByUrl(backURL);
  }

  async updateFormDate(): Promise<void> {
    this.videoForm.get('title')?.enable();

    let videoURLFormValue = this.videoForm.get('videoUrl')?.value;
    if (videoURLFormValue !== '') {
      let videoService = URLUtils.getVideoService(videoURLFormValue);
      if (videoService === '') {
        this.videoForm
          .get('videoService')
          ?.setValue('Failed to load videoService please check your URL');
      } else {
        this.videoForm.get('videoService')?.setValue(videoService);
      }
      let fileId = FileUtils.extractFileId(videoURLFormValue, videoService);

      if (fileId) {
        this.videoForm.get('title')?.setValue('loading...');
        this.videoForm.get('description')?.setValue('loading...');
        this.videoForm.get('thumbnailURL')?.setValue('loading...');

        const { title, description, thumbnailURL, error }: any = await this.getVideoData(
          fileId || '',
          videoService,
        );

        this.videoForm.get('title')?.setValue(title);
        if (title == ErrorsEnum.titleLoadFail) {
          this.videoForm.get('title')?.disable();
        }

        this.videoForm.get('description')?.setValue(description);
        this.videoForm.get('thumbnailURL')?.setValue(thumbnailURL);
      }
    } else {
      this.videoForm.reset();
    }
  }

  async getVideoData(
    fileId: string,
    videoService: string,
  ): Promise<{
    title?: string;
    description?: string;
    thumbnailURL?: string;
    error?: string;
  } | void> {
    try {
      let res;
      switch (videoService) {
        case videoServiceEnum.GoogleDrive:
          res = await firstValueFrom(this.googleService.getDriveVideoDetails(fileId));
          return {
            title: res.name,
            description: '',
            thumbnailURL: '',
          };
        case videoServiceEnum.YouTube:
          res = await firstValueFrom(this.googleService.getYouTubeVideoDetails(fileId));

          return {
            title: res.items[0].snippet.localized.title,
            description: res.items[0].snippet.localized.description,
            thumbnailURL: res.items[0].snippet.thumbnails.maxres.url,
          };
      }
    } catch (error) {
      return {
        error: 'Failed to load please check your URL',
      };
    }
  }
}
