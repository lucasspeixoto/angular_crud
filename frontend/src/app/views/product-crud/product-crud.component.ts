import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductCreateComponent } from './../../components/product/product-create/product-create.component';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    private dialog: MatDialog
  ) {
    this.headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }
  /*com o privater router, no construtor, o Angular vai instanciar
 um router na nossa classe, ai poderemos utilizar o metodo navigate para navegar.
 Em outras palavras, o Angular vai injetar o Router que importamos dentro da classe */

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(ProductCreateComponent, dialogConfig)
    //this.router.navigate(['/products/create'])
  }
}
