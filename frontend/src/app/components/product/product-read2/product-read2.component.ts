import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductRead2DataSource } from './product-read2-datasource';

@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource!: ProductRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.dataSource = new ProductRead2DataSource();

  }

  ngAfterViewInit(): void {

    this.productService.read().subscribe(product => {
      console.log("product dentro do subscribe ", product)
      this.dataSource.data = product

      console.log("this.dataSource.data dentro subscribe", this.dataSource.data)
      return this.dataSource.data
    })
    console.log("this.dataSource.data fora subscribe", this.dataSource.data)
    console.log("this.dataSource fora subscribe", this.dataSource)

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
