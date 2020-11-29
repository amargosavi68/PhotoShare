import { Component, Inject, OnInit } from '@angular/core';
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
    //alert("Photo deleted "+ id);
    this.photoService.deletePhoto(id);
  }
}
