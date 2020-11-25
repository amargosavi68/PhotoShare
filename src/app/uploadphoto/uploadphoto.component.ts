import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { PhotosService } from '../services/photos.service';
import { Formdata } from "../shared/upload";

@Component({
  selector: 'app-uploadphoto',
  templateUrl: './uploadphoto.component.html',
  styleUrls: ['./uploadphoto.component.css']
})
export class UploadphotoComponent implements OnInit {

  'uploadForm': FormGroup;
  'formData': Formdata;
  @ViewChild('uform') uploadFormDirective:any;

  constructor(private fb: FormBuilder, private photoService: PhotosService) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.uploadForm = this.fb.group({
      title: '',
      image: '',
      description: ''
    });
  }

  onSubmit() {
    this.formData = this.uploadForm.value;
    console.log(this.formData);
    this.uploadForm.reset({
      title:'',
      image:'',
      description:'',
    });
    this.uploadFormDirective.resetForm();
  }
}
