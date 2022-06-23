import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interface/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrPosts: Post[] = [];

  constructor(
    private postsService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.arrPosts
  }

}
