import { Component } from '@angular/core';
import { Product} from './models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})

export class CatalogComponent {
  products: Product[] = [
    new Product(1, 'Samsung Galaxy S24', 899),
    new Product(2, 'Samsung Galaxy Buds Pro 2', undefined, '10%'),
    new Product(3, 'Samsung Galaxy Book 3', 1149),
    new Product(4, 'Iphone 14', undefined, '50%'),
    new Product(5, 'TV LG OLED', 1450),
  ];

  get productsWithoutPrice(): Product[] {
    return this.products.filter(product => product.price === undefined);
  }

  get productPromo(): Product [] {
    return this.products.filter(product => product.promo !== undefined);
  }

  get otherProducts(): Product [] {
    return this.products.filter(product => product.price !== undefined && !product.promo);
  }
}

