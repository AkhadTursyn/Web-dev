import { Injectable } from '@angular/core';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

 products: Product[] = [

  // 📱 SMARTPHONES (categoryId: 1)
  {
    id: 1,
    name: 'iPhone 15',
    description: 'Apple smartphone 128GB',
    price: 520000,
    rating: 5,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 1
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    description: 'Samsung flagship smartphone',
    price: 480000,
    rating: 5,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 1
  },
  {
    id: 3,
    name: 'Xiaomi 13',
    description: 'Powerful Xiaomi device',
    price: 350000,
    rating: 4,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 1
  },
  {
    id: 4,
    name: 'Google Pixel 8',
    description: 'Pure Android experience',
    price: 420000,
    rating: 5,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 1
  },
  {
    id: 5,
    name: 'OnePlus 11',
    description: 'Fast and smooth smartphone',
    price: 390000,
    rating: 4,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 1
  },

  // 💻 LAPTOPS (categoryId: 2)
  {
    id: 6,
    name: 'MacBook Air M2',
    description: 'Apple laptop 13-inch',
    price: 750000,
    rating: 5,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 2
  },
  {
    id: 7,
    name: 'Dell XPS 13',
    description: 'Premium Windows laptop',
    price: 680000,
    rating: 5,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 2
  },
  {
    id: 8,
    name: 'HP Pavilion',
    description: 'Affordable performance laptop',
    price: 420000,
    rating: 4,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 2
  },
  {
    id: 9,
    name: 'Lenovo ThinkPad',
    description: 'Business laptop',
    price: 500000,
    rating: 4,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 2
  },
  {
    id: 10,
    name: 'Asus ROG',
    description: 'Gaming laptop',
    price: 900000,
    rating: 5,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 2
  },

  // 🎧 HEADPHONES (categoryId: 3)
  {
    id: 11,
    name: 'AirPods Pro',
    description: 'Apple wireless earbuds',
    price: 150000,
    rating: 5,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 3
  },
  {
    id: 12,
    name: 'Sony WH-1000XM5',
    description: 'Noise cancelling headphones',
    price: 200000,
    rating: 5,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 3
  },
  {
    id: 13,
    name: 'JBL Tune 510',
    description: 'Affordable JBL headphones',
    price: 40000,
    rating: 4,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 3
  },
  {
    id: 14,
    name: 'Beats Studio 3',
    description: 'Stylish wireless headphones',
    price: 180000,
    rating: 4,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 3
  },
  {
    id: 15,
    name: 'Xiaomi Buds',
    description: 'Budget wireless earbuds',
    price: 35000,
    rating: 4,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 3
  },

  // 📲 TABLETS (categoryId: 4)
  {
    id: 16,
    name: 'iPad Air',
    description: 'Apple tablet 10.9-inch',
    price: 420000,
    rating: 5,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 4
  },
  {
    id: 17,
    name: 'Samsung Galaxy Tab S9',
    description: 'Android premium tablet',
    price: 380000,
    rating: 5,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 4
  },
  {
    id: 18,
    name: 'Lenovo Tab M10',
    description: 'Affordable tablet',
    price: 120000,
    rating: 4,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 4
  },
  {
    id: 19,
    name: 'Huawei MatePad',
    description: 'Powerful Huawei tablet',
    price: 250000,
    rating: 4,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 4
  },
  {
    id: 20,
    name: 'Xiaomi Pad 6',
    description: 'Great value Android tablet',
    price: 200000,
    rating: 4,
    image: 'https://via.placeholder.com/200',
    link: 'https://kaspi.kz',
    likes: 0,
    categoryId: 4
  }

];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}