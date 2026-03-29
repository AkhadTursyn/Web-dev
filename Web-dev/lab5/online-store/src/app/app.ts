import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 13',
      price: 359890,
      image: 'assets/iphone.jpg',
      rating: 5,
      categoryId: 1,
      isFavorite: false
    },
    {
      id: 2,
      name: 'Sony WH-1000XM4',
      price: 124560,
      image: 'assets/sony.jpg',
      rating: 5,
      categoryId: 3,
      isFavorite: false
    }
  ];

  favorites: Product[] = [];

  toggleFavorite(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    product.isFavorite = !product.isFavorite;

    this.favorites = this.products.filter(p => p.isFavorite);
  }
}