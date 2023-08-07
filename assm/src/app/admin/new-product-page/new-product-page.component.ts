import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/@types';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product-page',
  templateUrl: './new-product-page.component.html',
  styleUrls: ['./new-product-page.component.scss'],
})
export class NewProductPageComponent {
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  productForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    avatar: ['', [Validators.required]],
    price: [0, [Validators.required]],
  });

  handleAddProduct() {
    if (this.productForm.valid) {
      const product = this.productForm.value as IProduct;
      console.log(product)
      this.productService.addProduct(product).subscribe(() => {
        this.router.navigate(['/admin']);
      });
    }
  }
}
