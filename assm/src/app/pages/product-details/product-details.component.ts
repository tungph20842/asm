import { Component , OnInit} from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/@types';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
 this.productService.getProductById(id).subscribe(data => {
     this.product = data.datas;
    console.log(this.product);
  });
}
}