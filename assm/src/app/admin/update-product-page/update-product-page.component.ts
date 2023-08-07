import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/@types';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product-page',
  templateUrl: './update-product-page.component.html',
  styleUrls: ['./update-product-page.component.scss'],
})
export class UpdateProductPageComponent {
    product!: IProduct;
    productForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        price: [0],
        avatar: ['', [Validators.required]],

    })

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: Router,

    ) {

        this.route.paramMap.subscribe(param => {
            const id = this.route.snapshot.params['id'];
            
            
            this.productService.getProductById(id).subscribe(product => {
                this.product = product.datas;
                // set giá trị từ API vào input form
                this.productForm.patchValue({
                    name: this.product.name,
                    price: this.product.price,
                    avatar: this.product.avatar,
                });
              console.log(product.datas)
            }, error => console.log(error.message));
        })
    }

    handleEditProduct() {
        if (this.productForm.valid) {
            const newProduct: IProduct = {
                _id: this.product._id,
                name: this.productForm.value.name || "",
                avatar: this.productForm.value.avatar || "",
                price: this.productForm.value.price || 0,

            }
            console.log(newProduct);

            this.productService.updateProduct(newProduct).subscribe(product => {
                alert("Cập nhật sản phẩm thành công")
                this.router.navigate(['/admin']);
            })
        }
    }
}
