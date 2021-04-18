import { Product } from './../product.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductRead2DataSource } from './product-read2-datasource';

@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource: ProductRead2DataSource;

  /* Aqui, os componentes MatPaginator e Matsort,  são obtidos
  diretamente do html, através do decorator ViewChild, que vai
  percorrer o template e atribuir às variáveis paginator e sort,
  os componentes MatPaginator e Matsort*/

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price', 'storage'];

  constructor() {
    this.dataSource = new ProductRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
