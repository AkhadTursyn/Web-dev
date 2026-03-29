import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Photo } from '../models/photo.model';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  private albumsSubject = new BehaviorSubject<Album[] | null>(null);
  albums$ = this.albumsSubject.asObservable();

  constructor(private http: HttpClient) {}
  getAlbum(id: number) {
  return this.http.get<Album>(`${this.apiUrl}/${id}`);
}

getPhotos(albumId: number) {
  return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
}
  loadAlbums(): void {
    if (this.albumsSubject.value) return;

    this.http.get<Album[]>(this.apiUrl)
      .subscribe(albums => {
        this.albumsSubject.next(albums);
      });
  }

  createAlbum(payload: { userId: number; title: string }): Observable<Album> {
    return this.http.post<Album>(this.apiUrl, payload).pipe(
      tap((createdAlbum) => {
        const current = this.albumsSubject.value ?? [];
        this.albumsSubject.next([createdAlbum, ...current]);
      })
    );
  }
  deleteAlbum(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`).pipe(
    tap(() => {
      const current = this.albumsSubject.value ?? [];
      this.albumsSubject.next(
        current.filter(album => album.id !== id)
      );
    })
  );
}
getPhotos(albumId: number) {
  return this.http.get<Photo[]>(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
  );
}
}