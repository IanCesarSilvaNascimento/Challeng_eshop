import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url = environment.apiEndpoint;

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<ProductModel[]>(`${this.url}/products`);
  }
}
