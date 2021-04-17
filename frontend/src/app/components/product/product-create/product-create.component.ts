import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
  ) { } //Injetando o service ProductService

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.showMessage('Testando Injeção do service')
    /*Ao iniciar o componente ProductCreateComponent,
    a função showOnConsole vai ser chamada */
  }
  cancel(): void {
    this.router.navigate(['/products'])
    /*Ao iniciar o componente ProductCreateComponent,
    a função showOnConsole vai ser chamada */
  }


}
