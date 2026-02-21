import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
}
m 

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})

export class ProductListComponent {

  products: Product[] = [
  {
    id: 1,
    name: 'iPhone 13',
    price: 429990,
    description: 'The latest iPhone with A15 chip and dual-camera.',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pink-select',
    rating: 4.8
  },
  {
    id: 2,
    name: 'iPhone 12',
    price: 339990,
    description: 'Powerful performance with A14 Bionic chip.',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select',
    rating: 4.5
  },
  {
    id: 3,
    name: 'iPhone 11 Pro',
    price: 579990,
    description: 'Triple-camera system for pro photography.',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-midnightgreen-select',
    rating: 4.7
  }
];


  searchControl = new FormControl('');
  filteredProducts: Product[] = this.products;

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300)
      )
      .subscribe(value => {
        const query = value?.toLowerCase() || '';

        this.filteredProducts = this.products.filter(product =>
          product.name.toLowerCase().includes(query)
        );
      });
  }
}



