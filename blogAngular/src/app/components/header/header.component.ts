import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  arrCats: Category[] = []

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.arrCats = this.postService.getAllCats();
    console.log(this.arrCats);

  }

}
