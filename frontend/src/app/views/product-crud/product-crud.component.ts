import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { }  /*com o privater router, no construtor, o Angular vai instanciar
  um router na nossa classe, ai poderemos utilizar o metodo navigate para navegar.
  Em outras palavras, o Angular vai injetar o Router que importamos dentro da classe */

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
