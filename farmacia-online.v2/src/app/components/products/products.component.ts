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
  products: Product[] = [{
      id: undefined,
      name: 'NAME',
      description: 'Description',
      price: 40,
      stock: 'OUTOFSTOCK',
      image_url: undefined
  }];
  layout: any = 'grid';
  options = ['list', 'grid'];

  constructor(
    private productsService: ProductService
  ){}
  
  async ngOnInit() {
    // this.products = await this.productsService.getProducts();
    // console.log(this.products);
  }

  getSeverity(product: any) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}
}
