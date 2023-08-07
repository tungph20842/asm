import { Component,OnInit } from '@angular/core';
import { IProduct } from 'src/@types';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
})
export class ProductListPageComponent implements OnInit {
  products: IProduct[] = [];
  ngOnInit() {
    this.productService.getAllProduct().subscribe(data => {
      this.products = data.datas;
      console.log(data.datas);
    });
  }


  constructor(private productService: ProductService) {
    // this.productService
    //   .getAllProduct()
    //   .subscribe(data => {
    //     this.products = data.datas
    //   });
  }

  handleRemove(id: string) {
    const resultConfirm = confirm('Xóa chứ !!');
    if (resultConfirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(item =>{ item._id !== id})
        // window.location.reload();cma
        this.productService.getAllProduct().subscribe((data)=>{
          this.products = data.datas
        })  
      })
    }
  }
}
