import { Component } from '@angular/core';
import { ProductService } from '@services/products.service';
import { CartService } from '@services/cart.service';
import { Product } from '@models/products';
import { CartItem } from '@models/cart-item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  standalone: false
})

export class ProductsComponent {
  products: Product[] = [];
  layout: any = 'grid';
  options = ['list', 'grid'];

  constructor(
    private productsService: ProductService,
    private cartService: CartService
  ){}

  async ngOnInit() {
    this.products = await this.productsService.getProducts();
    this.products = this.products.map(x => {
      x.image_url = 'https://placehold.jp/3d4070/ffffff/150x120.png'
      return x;
    })
  }

  getSeverity(product: Product) {
    let stock: any = product.stock;
    if(stock > 50){
      return 'success';
    }else if(stock < 50 && stock > 0){
      return 'warn';
    }else{
      return 'danger';
    }
  }

  addToCart(product: Product) {
    let item: CartItem = {
      product: product,
      quantity: 1
    };

    this.cartService.addToCart(item);
  }
}
