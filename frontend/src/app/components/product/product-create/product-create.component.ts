import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MatDialogRef } from '@angular/material/dialog'
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null!,
    storage: null!
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private dialogRef: MatDialogRef<ProductCreateComponent>
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage(`${this.product.name} Inserido.`)
      this.afterCreate()
    })
  }

  afterCreate(): void {
    this.dialogRef.close()
    this.router.navigate(['/products'])

  }

  cancel(): void {
    this.dialogRef.close()
    this.router.navigate(['/products'])
  }

}
