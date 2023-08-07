import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/@types';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

   products: IProduct[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getAllProduct().subscribe(data => {
      this.products = data.datas;
      console.log(this.products);
    });
  }
  goToProductDetail(id: string) {
    this.router.navigate(['/product', id]);
  }
}
