import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {

  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  remove() {
    if (confirm('Are you sure you want to delete this product?')) {
      this.delete.emit(this.product.id);
    }
  }
}