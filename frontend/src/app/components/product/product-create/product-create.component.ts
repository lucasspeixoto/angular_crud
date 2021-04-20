import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

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
    private router: Router
  ) { } //Injetando o service ProductService

  ngOnInit(): void {
  }

  createProduct(): void {
    //Setando tipagem
    /* this.product = {
      name: this.product.name,
      price: Number(this.product.price),
      storage: Number(this.product.storage),
    } */

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage(`${this.product.name} Inserido.`)
      /*Ao iniciar o componente ProductCreateComponent,
      a função showOnConsole vai ser chamada */
      this.router.navigate(['/products'])
    }) //O método subscribe vai notificar quando a resposta chegar
  }

  cancel(): void {
    this.router.navigate(['/products'])
    /*Ao iniciar o componente ProductCreateComponent,
    a função showOnConsole vai ser chamada */
  }

}
