import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/products.models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {

  @Input() product!: Product;
  getStars(): number[] {
    return Array(Math.floor(this.product.rating)).fill(0);
  }
  shareWhatsApp() {
    const url = `https://wa.me/?text=Check out this product: ${this.product.link}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${this.product.link}&text=${this.product.name}`;
    window.open(url, '_blank');
}

}
