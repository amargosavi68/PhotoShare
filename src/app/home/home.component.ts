import { Component, Inject, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { PhotosService } from '../services/photos.service';
import { Photo } from "../shared/photo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  'photos': Photo[];
  resp: string = '';

  constructor(public photoService: PhotosService, @Inject('BaseURL') public BaseURL:string) { }

  ngOnInit(): void {
    this.photoService.getPhotos()
      .subscribe(photos => this.photos = photos);
  }

  deletePhoto(id: string) {
    this.photoService.deletePhoto(id)
    .subscribe(resp => {
      console.log(resp);
    });
  }
}
