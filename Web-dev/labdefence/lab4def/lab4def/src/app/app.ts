import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ProductListComponent } from './product-list/product-list';


interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {

  products: Product[] = [
    { id: 1, name: 'iPhone 13', price: 429990 },
    { id: 2, name: 'Samsung Galaxy S23', price: 389990 },
    { id: 3, name: 'iPhone 12', price: 339990 },
    { id: 4, name: 'MacBook Air', price: 599990 }
  ];

  searchQuery: string = '';
  filteredProducts: Product[] = this.products;

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase();

    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }
}
