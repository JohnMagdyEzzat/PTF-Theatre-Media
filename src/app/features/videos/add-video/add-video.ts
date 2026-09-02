import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupabaseService } from '../../../core/services/supabase';
import { Video } from '../../../core/models/video';
import { Router } from '@angular/router';

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
      youtube_url: ['', [Validators.required]],
      thumbnail_url: [''],
      duration_seconds: [null],
      // tags: [''],
    });
  }

  submit(): void {
    if (this.videoForm.valid) {
      this.saving = true;
      const videoData: Video = this.videoForm.value;
      this.supabaseService.addVideo(videoData);
      this.router.navigate(['/videos']);
    }
  }

  goBack(): void {
    const backURL = localStorage.getItem('recentURL') || 'videos';
    localStorage.removeItem('recentURL');
    this.router.navigateByUrl(backURL);
  }
}
