import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 ВОТ ЭТО ВАЖНО
  templateUrl: './albums.html'
})
export class AlbumsComponent implements OnInit {

  albums$: Observable<Album[] | null>;

  constructor(private albumService: AlbumService) {
    this.albums$ = this.albumService.albums$;
  }

  ngOnInit(): void {
    this.albumService.loadAlbums();
  }
  delete(id: number) {
  this.albumService.deleteAlbum(id).subscribe();
}
}