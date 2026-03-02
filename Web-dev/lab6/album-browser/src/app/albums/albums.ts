import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';

@Component({
  standalone: true,
  selector: 'app-albums',
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
  console.log("AlbumsComponent started");

  this.albumService.getAlbums().subscribe({
    next: (data) => {
      console.log("DATA RECEIVED:", data);
      this.albums = data;
      this.loading = false;
    },
    error: (err) => {
      console.error("ERROR:", err);
      this.loading = false;
    }
  });
}

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
  delete(id: number) {
  this.albumService.deleteAlbum(id).subscribe(() => {
    this.albums = this.albums.filter(a => a.id !== id);
  });
}
}