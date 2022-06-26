import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interface/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  mySinglePost: Post | any;
  favSwitch: boolean = false;
  textoSinglePost: string = `
  <strong class="text-primary">EDÍTAME COMO HTML DÁNDOLE AL BOTÓN AZUL</strong>
  <br class="my-4">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam nostrum sequi ipsa a.
    Reprehenderit ipsa quod nam ipsam ea enim harum. Perspiciatis sapiente corporis doloribus quae vel, temporibus iusto
    ipsum consequatur itaque placeat. Suscipit odio sed ipsum laboriosam perspiciatis enim distinctio magni consequuntur
    est! Maiores nobis repellendus perspiciatis voluptatibus!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam optio maxime modi, tempora eum ipsa in
    labore aliquid blanditiis.
  </p>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos vitae, nemo ad asperiores consequuntur dicta.
    Quibusdam optio eius iste pariatur delectus quisquam magnam.
    Doloribus itaque aperiam perspiciatis veniam maiores hic?
  </p>`

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {

      // console.log(params);
      let idPost = parseInt(params['idPost']);

      this.mySinglePost = this.postService.getById(idPost);
      console.log(this.mySinglePost);
    })

  }

  deletePost(pId: number): void {
    // console.log(pId);
    this.postService.deleteById(pId);
    this.router.navigate(['/home'])
  }


  editTexto($event: any): void {
    this.textoSinglePost = $event.target.value
  }

  favPostSwitch(pId: number): void {
    this.favSwitch = !this.favSwitch; // abajo podría ser igual que esto pero mejor lo dejo legible...

    if (this.favSwitch === true) {
      this.mySinglePost.fav = true
    } else {
      this.mySinglePost.fav = false
    }
    // console.log(this.mySinglePost);

  }

}
