import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Photo } from "../shared/photo";
import { baseURL } from "../shared/baseurl";

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(private http: HttpClient) { }

  post_Image(img: File): Observable<String> {
    console.log("In file upload Service: "+ img);
    var formdata = new FormData();
    formdata.append('imageFile',img);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<String>(baseURL + 'savephoto', formdata, httpOptions);
  }
}
