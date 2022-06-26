import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interface/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  arrPosts: Post[] = [];
  catTitle: string = '';
  collapseID: string = ''

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params);
      let category = params['catTitle'];
      this.arrPosts = this.postService.getByCategory(category[0].toUpperCase() + category.substring(1));

      this.catTitle = category
      this.collapseID = 'collapse-'
    })
  }

}
