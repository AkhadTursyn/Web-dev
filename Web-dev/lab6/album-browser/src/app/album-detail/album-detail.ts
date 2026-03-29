import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';

@Component({
  standalone: true,
  selector: 'app-album-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './album-detail.html'
})
export class AlbumDetailComponent implements OnInit {

  album?: Album;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const current = this.albumService['albumsSubject'].value;

    if (current) {
      const found = current.find(a => a.id === id);
      if (found) {
        this.album = found;
        this.loading = false;
        return;
      }
    }

    this.albumService.getAlbum(id).subscribe({
      next: (data: Album) => {
        this.album = data;
        this.loading = false;
      }
    });
  }
}