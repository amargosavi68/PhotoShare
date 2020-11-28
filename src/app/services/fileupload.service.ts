import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor() { }
  postImage(img: File) {
    return true;
  }
}
