import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      `${this.apiUrl}/albums/${albumId}/photos`
    );
  }

  deleteAlbum(id: number) {
    return this.http.delete(`${this.apiUrl}/albums/${id}`);
  }

  updateAlbum(album: Album) {
    return this.http.put(
      `${this.apiUrl}/albums/${album.id}`,
      album
    );
  }
}