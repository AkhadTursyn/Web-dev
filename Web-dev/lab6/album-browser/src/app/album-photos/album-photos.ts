import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../services/album';
import { Photo } from '../models/photo.model';

@Component({
  standalone: true,
  selector: 'app-album-photos',
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html'
})
export class AlbumPhotosComponent implements OnInit {

  photos: Photo[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getPhotos(id).subscribe({
      next: (data: Photo[]) => {
        this.photos = data;
        this.loading = false;
      }
    });
  }
}