import { Injectable } from '@angular/core';
import { Category, Photo } from "../shared/photo";
import { Observable, of, throwError } from "rxjs";
import { catchError, delay, filter } from "rxjs/operators";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(baseURL + 'home');
  }

  'file': string = '';

  postPhoto(photo: Photo, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('author', photo.author);
    formData.append('location', photo.location);
    formData.append('title', photo.title);
    formData.append('category', photo.category);
    formData.append('description', photo.description);
    const header = new HttpHeaders();
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    const req = new HttpRequest('POST', baseURL+'uploadphoto', formData, options);
    return this.http.request(req);

  }

  deletePhoto(id: string): Observable<Photo> {
    //alert(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete<Photo>(baseURL + 'home/'+ id, httpOptions);
  }


  getCategorialPhotos(category: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(baseURL + 'analysis/' + category);
  }

}
