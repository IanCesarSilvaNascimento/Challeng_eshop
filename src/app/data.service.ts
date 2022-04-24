import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url = 'DIGITE AQUI A URL DA API QUE ENTREGA OS DADOS DO PRODUTO';

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<ProductModel[]>(`${this.url}/products`);
  }
}
