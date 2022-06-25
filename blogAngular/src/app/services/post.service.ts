import { Injectable } from '@angular/core';
import { Category } from '../interface/category.interface';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private arrPost: Post[] = [];
  private arrCat: Category[] = [];

  constructor() {

    this.arrCat = [
      {
        titulo: 'Actividades'
      },
      {
        titulo: 'Rutas'
      },
      {
        titulo: 'Consejos'
      },
      {
        titulo: 'Gastronomia'
      },
      {
        titulo: 'Alojamiento'
      },
    ];

    this.arrPost = [
      {
        id: 1,
        titulo: 'Titulo de post 1',
        texto: 'Este es el texto que describe el post número 1. Este es el texto que describe el post número 1.',
        autor: 'Jorge',
        imagen: 'https://picsum.photos/id/11/200/300',
        fecha: '23-12-2021',
        categoria: 'Consejos'
      },
      {
        id: 2,
        titulo: 'Titulo de post 2',
        texto: 'Este es el texto que describe el post número 2. Este es el texto que describe el post número 2.',
        autor: 'Rosa',
        imagen: 'https://picsum.photos/id/62/200/300',
        fecha: '22-03-2022',
        categoria: 'Gastronomia'
      },
      {
        id: 3,
        titulo: 'Titulo de post 3',
        texto: 'Este es el texto que describe el post número 3. Este es el texto que describe el post número 3.',
        autor: 'Pedro',
        imagen: 'https://picsum.photos/id/3/200/300',
        fecha: '13-05-2022',
        categoria: 'Rutas'
      },
      {
        id: 4,
        titulo: 'Titulo de post 4',
        texto: 'Este es el texto que describe el post número 4. Este es el texto que describe el post número 4.',
        autor: 'Dani',
        imagen: 'https://picsum.photos/id/24/200/300',
        fecha: '20-06-2022',
        categoria: 'Actividades'
      },
      {
        id: 5,
        titulo: 'Titulo de post 5',
        texto: 'Este es el texto que describe el post número 5. Este es el texto que describe el post número 5.',
        autor: 'Raúl',
        imagen: 'https://picsum.photos/id/35/200/300',
        fecha: '01-10-2022',
        categoria: 'Alojamiento'
      },
      {
        id: 6,
        titulo: 'Titulo de post 6',
        texto: 'Este es el texto que describe el post número 6. Este es el texto que describe el post número 6.',
        autor: 'Lolo',
        imagen: 'https://picsum.photos/id/46/200/300',
        fecha: '28-02-2023',
        categoria: 'Actividades'
      }
    ];

  }

  // getDate() {
  //   let fecha = new Date()
  //   console.log(fecha);
  // }

  getAllPosts(): Post[] {
    return this.arrPost;
  }

  getAllCats(): Category[] {
    return this.arrCat;
  }



}
