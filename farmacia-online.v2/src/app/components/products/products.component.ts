import { Component } from '@angular/core';
import { ProductService } from '../../core/services/integration/products.service';
import { Product } from '../../core/models/products';

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
    private productsService: ProductService
  ){}
  
  async ngOnInit() {
    this.products = await this.productsService.getProducts();
    console.log(this.products);
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
}
