import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/interface/category.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newPostForm: FormGroup;
  arrCats: Category[] = [];

  constructor(private postService: PostService) {

    this.newPostForm = new FormGroup({
      titulo: new FormControl('', []),
      autor: new FormControl('', []),
      categoria: new FormControl('', []),
      texto: new FormControl('', []),
      imagen: new FormControl('', []),
      fecha: new FormControl('', []),
    }, [])

  }

  ngOnInit(): void {

    this.arrCats = this.postService.getAllCats();

  }

  getDataForm() {
    console.log(this.newPostForm.value);
  }

}
