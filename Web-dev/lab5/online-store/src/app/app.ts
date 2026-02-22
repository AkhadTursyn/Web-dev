import { Component } from '@angular/core';
import { ProductService } from './product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './product-list/product-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  searchText: string = '';
  allProducts: Product[] = [];
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
  this.selectedCategoryId = categoryId;
  this.allProducts = this.productService.getProductsByCategory(categoryId);
  this.products = [...this.allProducts];
}
  filterProducts() {
  this.products = this.allProducts.filter(p =>
    p.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
}
  sortProducts(event: any) {
  const value = event.target.value;

  if (value === 'priceAsc') {
    this.products = [...this.products].sort((a, b) => a.price - b.price);
  }

  if (value === 'priceDesc') {
    this.products = [...this.products].sort((a, b) => b.price - a.price);
  }

  if (value === 'rating') {
    this.products = [...this.products].sort((a, b) => b.rating - a.rating);
  }
}
}