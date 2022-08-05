import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpserviceService } from '../services/httpservice.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[]=[];
 
  loading: boolean = false;
  errorMessage: string='';
  constructor(private httpService: HttpserviceService) { }

  ngOnInit(): void {
  }
  public getPosts(){
    this.loading = true;
    this.errorMessage = "";
    this.httpService.getAllPosts()
      .subscribe(
        (response) => {                           //next() callback
          this.posts = response;
          console.log(this.posts); 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        });
  }

}
