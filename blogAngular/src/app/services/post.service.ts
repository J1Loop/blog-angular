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
        titulo: 'Consejos'
      },
      {
        titulo: 'Rutas'
      },
      {
        titulo: 'Actividades'
      },
      {
        titulo: 'Gastronomía'
      },
      {
        titulo: 'Alojamiento'
      },
    ]

    this.arrPost = [
      {
        id: 1,
        titulo: 'string',
        texto: 'string',
        autor: 'string',
        imagen: 'https://picsum.photos/id/1/200/300',
        fecha: 'string',
        categoria: 'string'
      },
      {
        id: 2,
        titulo: 'string',
        texto: 'string',
        autor: 'string',
        imagen: 'https://picsum.photos/id/2/200/300',
        fecha: 'string',
        categoria: 'string'
      },
      {
        id: 3,
        titulo: 'string',
        texto: 'string',
        autor: 'string',
        imagen: 'https://picsum.photos/id/3/200/300',
        fecha: 'string',
        categoria: 'string'
      },
      {
        id: 4,
        titulo: 'string',
        texto: 'string',
        autor: 'string',
        imagen: 'https://picsum.photos/id/4/200/300',
        fecha: 'string',
        categoria: 'string'
      }
    ]
  }





}
