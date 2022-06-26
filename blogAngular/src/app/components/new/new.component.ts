import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private postService: PostService,
    private router: Router,
  ) {

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
        Validators.required,
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(20), // no tiene max porque ya lo tiene via HTML attributes
      ]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.pattern(/((https?:\/\/w{3}\.)|(https?:\/\/)|(w{3}\.))([\w\.]+)\.([a-zA-Z]{1,})(\/?.+)(\d|jpg|png|jpeg|gif)/), // https://regexr.com/6og51
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
    // console.log(this.newPostForm.value);
    let canAddPost = this.postService.addPost(this.newPostForm.value);

    if (canAddPost) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/new']);
      alert('No se ha podido agregar.')
    }

  }

  isUserRetarded(pControlName: string, pErrorName: string): boolean {
    let retarded = (this.newPostForm.get(pControlName)?.hasError(pErrorName)
      && this.newPostForm.get(pControlName)?.touched) ? true : false;

    return retarded
  }

}
