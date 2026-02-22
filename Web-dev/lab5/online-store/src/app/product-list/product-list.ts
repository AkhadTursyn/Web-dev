import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],   // 👈 ВАЖНО
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  @Input() products: Product[] = [];

  removeProduct(productId: number) {
  this.products = this.products.filter(p => p.id !== productId);
}
}
