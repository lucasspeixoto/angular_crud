import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root' /* Esse root significa que o service é um
   singleton (classe com uma única instância). Ou seja, se tivermos
   algum valor que modifica ao longo do funcionamento, esse vai ser
   passado para todos componentes onde o service for injetado.
   */
})
export class ProductService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

}
