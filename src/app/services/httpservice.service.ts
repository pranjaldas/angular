import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  BASE_URL: string = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  getAllPosts():Observable<any> {
    return this.http.get(this.BASE_URL + 'posts');
  }
}
