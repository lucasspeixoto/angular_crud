

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, EMPTY } from "rxjs";

@Injectable({
  providedIn: 'root' /* Esse root significa que o service é um
   singleton (classe com uma única instância). Ou seja, se tivermos
   algum valor que modifica ao longo do funcionamento, esse vai ser
   passado para todos componentes onde o service for injetado.
   */
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  //Para inserir no backend o nosso produto
  create(product: Product): Observable <Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

}
