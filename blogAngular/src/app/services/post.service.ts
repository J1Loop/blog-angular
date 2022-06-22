import { Injectable } from '@angular/core';
import { Category } from '../interface/category.interface';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  arrPost: Post[] = [];
  arrCat: Category[] = [];

  constructor() {


  }

}
