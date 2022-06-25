import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40)
      ]),
      autor: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.pattern(/((https?:\/\/w{3}\.)|(https?:\/\/)|(w{3}\.))([\w\.]+)\.([a-zA-Z]{1,})(\/?.+)/), // https://regexr.com/6og51
      ]),
      fecha: new FormControl('', [
        Validators.required
      ]),
    }, [])

  }

  ngOnInit(): void {

    this.arrCats = this.postService.getAllCats();

  }

  getDataForm() {
    console.log(this.newPostForm.value);
  }

}
