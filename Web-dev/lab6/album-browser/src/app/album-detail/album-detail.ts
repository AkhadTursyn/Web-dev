import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';

@Component({
  standalone: true,
  selector: 'app-album-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css'] 
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
  console.log("ID:", id);

  this.albumService.getAlbum(id).subscribe({
    next: (data) => {
      console.log("DATA:", data);
      this.album = data;
      this.loading = false;
    },
    error: (err) => {
      console.log("ERROR:", err);
      this.loading = false;
    }
  });
}
}