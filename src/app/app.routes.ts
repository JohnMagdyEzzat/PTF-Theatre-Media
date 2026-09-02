import { Routes } from '@angular/router';
import { VideoPlayer } from './features/videos/video-player/video-player';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout').then((m) => m.MainLayout),

    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },

      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
      },

      {
        path: 'videos',
        loadComponent: () =>
          import('./features/videos/video-list/video-list').then((m) => m.VideoList),
      },

      {
        path: 'add/video',
        loadComponent: () =>
          import('./features/videos/add-video/add-video').then((m) => m.AddVideo),
      },

      {
        path: 'video/:id',
        component: VideoPlayer,
      },
    ],
  },
];
