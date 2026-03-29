import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent {

  @Input() product!: Product;
  @Output() favoriteToggle = new EventEmitter<number>();

  onToggleFavorite() {
    this.favoriteToggle.emit(this.product.id);
  }
}