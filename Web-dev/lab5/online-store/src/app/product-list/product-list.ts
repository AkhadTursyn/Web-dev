import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  @Input() products: Product[] = [];
  @Output() favoriteToggle = new EventEmitter<number>();
}