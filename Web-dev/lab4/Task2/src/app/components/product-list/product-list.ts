import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/products.models';
import { ProductCardComponent } from '../product-card/product-card';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Latest Apple smartphone with A17 chip.',
      price: 499000,
      rating: 4.8,
      image: 'https://via.placeholder.com/200',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Samsung smartphone.',
      price: 420000,
      rating: 4.7,
      image: 'https://via.placeholder.com/200',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ],
      link: 'https://kaspi.kz'
    }
     {
    id: 3,
    name: 'Xiaomi 13',
    description: 'Powerful Xiaomi smartphone with AMOLED display.',
    price: 350000,
    rating: 4.6,
    image: '',
    images: [
      ',
      ',
      '
    ],
    link: 'ССЫЛКА НА KASPI'
  }


  ];

}

