import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { PhotosService } from '../services/photos.service';
import { FileuploadService } from "../services/fileupload.service";
import { Photo, Category } from "../shared/photo";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-uploadphoto',
  templateUrl: './uploadphoto.component.html',
  styleUrls: ['./uploadphoto.component.css']
})
export class UploadphotoComponent implements OnInit {

  'uploadForm': FormGroup;
  'author'= '';
  'location'='';
  'title'= '';
  'imageFile': File;
  'category' = '';
  'description' = '';

  'formData': Photo;
  'CategoryTypes' = Category;

  @ViewChild('uform') uploadFormDirective:any;

  constructor(private fb: FormBuilder, private photoService: PhotosService, private http: HttpClient) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  uploading: boolean = false;
  
  createForm() {
    this.uploadForm = this.fb.group({
      author: '',
      location:'',
      title: '',
      imageFile: null,
      category: '',
      description: ''
    });
  }

  onSubmit(): void {
    this.formData = this.uploadForm.value;
    console.log(this.formData);
    this.uploading = true;
    this.photoService.postPhoto(this.formData, this.uploadForm.get('imageFile')?.value._files[0])
    .subscribe((res: any) => {
      console.log(res);
    }, (err: any) => {
      console.log(err);
    });
    setTimeout(() => { this.uploading = false }, 2000);
    //console.log(this.uploadForm.get('imageFile')?.value);
    this.uploadForm.reset({
      author: '',
      location:'',
      title: '',
      imageFile: null,
      category: '',
      description: ''
    });
    
    this.uploadFormDirective.resetForm();
  }
}
