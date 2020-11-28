import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { PhotosService } from '../services/photos.service';
import { Photo } from "../shared/photo";

@Component({
  selector: 'app-uploadphoto',
  templateUrl: './uploadphoto.component.html',
  styleUrls: ['./uploadphoto.component.css']
})
export class UploadphotoComponent implements OnInit {

  'uploadForm': FormGroup;
  'formData': Photo;
  @ViewChild('uform') uploadFormDirective:any;

  constructor(private fb: FormBuilder, private photoService: PhotosService) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  msg: string = '';
  uploading: boolean = false;

  createForm() {
    this.uploadForm = this.fb.group({
      author: '',
      location:'',
      title: '',
      image: '',
      description: ''
    });
  }

  onSubmit() {
    this.formData = this.uploadForm.value;
    this.uploading = true;
    this.photoService.postPhoto(this.formData)
      .subscribe(msg => this.msg = msg);
    setTimeout(() => { this.uploading = false }, 2000);
    console.log(this.formData);
    this.uploadForm.reset({
      author: '',
      location:'',
      title: '',
      image: '',
      description: ''
    });
    this.msg = '';
    this.uploadFormDirective.resetForm();
  }
}
