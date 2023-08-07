import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/@types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private uri = 'http://localhost:8088';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<any> {
    return this.http.get<any>('http://localhost:8088/api/products');
  }

  getProductById(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:8088/api/products/' + id);
  }

  addProduct(data: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:8088/api/products', data);
  }
  updateProduct(data: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>('http://localhost:8088/api/products/' + data._id, data);
  }

  deleteProduct(id: number | string ): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:8088/api/products/' + id);
  }
}
