import { Injectable } from '@angular/core';
import { Photo } from "../shared/photo";
import { PHOTOS } from "../shared/PHOTOS";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor() { }

  getPhotos(): Observable<Photo[]> {
    return of(PHOTOS).pipe(delay(1000));
  }

  postPhoto(photo: Photo): Observable<string> {
    PHOTOS.push(photo);
    return of("Photo Uploaded Successfully..").pipe(delay(1000));
  }
}
